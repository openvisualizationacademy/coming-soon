import People from "./People.js";

export default class Contributors extends People {
  constructor(selector) {
    super(selector, "contributor", "contributors");
  }

  getDetails(person) {
    return `
    <div class="details">
      <div class="person" data-role="${this.role}">
        ${
          person.photo
            ? `<img class="media" src="media/people/small/${person.photo}" loading="lazy" alt="Profile photo">`
            : `<div class="media"></div>`
        }
        <div class="info">
          <h2><strong>${person.name}</strong></h2>
          <span class="tagline">${person.tagline}</span>
          <p class="bio">${person.bio}</p>
        </div>
        <ul class="links">
          ${ this.list(person.links) }
        </ul>
      </div>
    </div>
    `;
  }
}
