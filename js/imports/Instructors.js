import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

export default class Instructors {
  constructor(selector, role) {
    this.element = document.querySelector(selector) || document.body;
    if (!this.element) return;

    this.dialog = this.element.querySelector('dialog');
    this.role = "instructor";

    this.domains = {
      "linkedin.com" : "linkedin",
      "instagram.com" : "instagram",
      "github.com" : "github",
      "medium.com" : "medium",
      "bsky.app" : "bluesky",
      "x.com" : "x",
    }

    this.icons = {
      "internet" : "internet icon",
      "linkedin": "linkedin icon",
      "instagram": "instagram icon",
      "github": "github icon",
      "medium": "medium icon",
      "bluesky": "bluesky icon",
      "x": "x icon",
    }

    this.setup();
  }

  setupCards() {
    this.data.forEach((person, index) => {
      const card = `
      <div role="button" tabindex="0" class="person" data-role="${this.role}" onclick="app.instructors.open(${index})">
        <figure>
          ${
            person.photo
              ? `<img class="media" src="media/people/small/${person.photo}" loading="lazy" alt="Profile photo">`
              : `<div class="media"></div>`
          }
          <figcaption>
            <strong>${person.name}<span class="screen-reader"/>.</span></strong>
            <span class="tagline">${person.tagline}</span>  
          </figcaption>
        </figure>
      </div>
      `;
      this.element.insertAdjacentHTML("beforeend", card);
    });
  }

  async setup() {
    this.data = await d3.json("./data/people.json");
    this.data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    this.data = this.data.filter((person) => person.role === this.role);

    this.setupCards();
  }

  clear() {
    this.dialog.querySelector('.details').remove()
  }

  open(index) {
    if (!this.dialog) return;
    this.clear();

    const person = this.data[index]

    const details = `
    <div class="details">
      <div class="person" data-role="${this.role}">
        <figure>
          ${
            person.photo
              ? `<img class="media" src="media/people/small/${person.photo}" loading="lazy" alt="Profile photo">`
              : `<div class="media"></div>`
          }
          <figcaption>
            <strong>${person.name}<span class="screen-reader"/>.</span></strong>
            <span class="tagline">${person.tagline}</span>  
          </figcaption>
        </figure>
        <p>${person.bio}</p>

        <ul class="links">
          ${ this.list(person.links) }
          </ul>
      </div>
    </div>
    `;

    this.dialog.insertAdjacentHTML('beforeend', details);
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
  }

  icon(link) {
    let platform = "internet";

    for (let domain in this.domains) {
      console.log(domain);
      if (link.includes(`//${domain}`) || link.includes(`//www.${domain}`) ) {
        platform = this.domains[ domain ];
        break;
      }
    }

    return this.icons[platform];
  }

  clean(link) {
    const start = /^(https?:\/\/)?(www\.)?/i;
    const end = /\/$/i;
    return link.replace(start, "").replace(end, "").toLowerCase();
  }

  list(links) {
    return links.map( link => `
      <li>
        <a href="${ link }" target="_blank">
          ${ this.icon(link) }
          ${ this.clean(link) }
        </a>
      </li>
    `).join("");
  }

  update() {}
}
