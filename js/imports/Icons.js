export default class Icons {
  constructor(app) {
    this.app = app;
    this.selector = '[data-icon]';

    this.cache = {};
    
    this.cache["sun-light"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"></path><path d="M22 12L23 12"></path><path d="M12 2V1"></path><path d="M12 23V22"></path><path d="M20 20L19 19"></path><path d="M20 4L19 5"></path><path d="M4 20L5 19"></path><path d="M4 4L5 5"></path><path d="M1 12L2 12"></path></svg>';
    this.cache["half-moon"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"></path></svg>';
    this.cache["open-new-window"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3L15 3M21 3L12 12M21 3V9"></path><path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"></path></svg>';
    this.cache["play-solid"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.90588 4.53682C6.50592 4.2998 6 4.58808 6 5.05299V18.947C6 19.4119 6.50592 19.7002 6.90588 19.4632L18.629 12.5162C19.0211 12.2838 19.0211 11.7162 18.629 11.4838L6.90588 4.53682Z"></path></svg>';
    this.cache["timer"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2L15 2"></path><path d="M12 10L12 14"></path><path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"></path></svg>';
    this.cache["x-mark"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"></path></svg>';
    this.cache["internet"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" ></path><path d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999"></path><path d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932"></path><path d="M2.62964 15.5H12"></path><path d="M2.62964 8.5H21.3704"></path><path d="M21.8789 17.9174C22.3727 18.2211 22.3423 18.9604 21.8337 19.0181L19.2671 19.309L18.1159 21.6213C17.8878 22.0795 17.1827 21.8552 17.0661 21.2873L15.8108 15.1713C15.7123 14.6913 16.1437 14.3892 16.561 14.646L21.8789 17.9174Z"></path></svg>';
    this.cache["linkedin"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"></path><path d="M7 17V13.5V10"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"></path><path d="M7 7.01L7.01 6.99889"></path></svg>';
    this.cache["instagram"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path><path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"></path><path d="M17.5 6.51L17.51 6.49889"></path></svg>';
    this.cache["github"] =  '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"></path><path d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"></path></svg>';
    this.cache["medium"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z"></path><path d="M15 16C16.1046 16 17 14.2091 17 12C17 9.79086 16.1046 8 15 8C13.8954 8 13 9.79086 13 12C13 14.2091 13.8954 16 15 16Z"></path><path d="M20 16C20.5523 16 21 14.2091 21 12C21 9.79086 20.5523 8 20 8C19.4477 8 19 9.79086 19 12C19 14.2091 19.4477 16 20 16Z"></path></svg>';
    this.cache["bluesky"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.38934,21C7.43869,21,6.40957,20.42683,5.32223,19.28981C4.31579,18.23748,3.93222,17.12400,4.24203,16.15476C4.50601,15.32844,5.24359,14.65768,6.37246,14.19367C4.70535,14.01455,3.10113,13.16670,2.55136,11.16506C2.33666,10.38265,2,5.82820,2,5.26048C2,4.18821,2.31158,3.48574,2.92578,3.17301C3.93954,2.65715,5.48577,3.37931,6.59445,4.22761L6.46090,4.40878L6.59445,4.22761C8.71310,5.84858,10.98178,9.02574,12.00003,10.96963C13.01846,9.02574,15.28710,5.84812,17.40557,4.22761C18.51425,3.37931,20.06091,2.65737,21.07421,3.17301C21.68869,3.48574,22,4.18821,22,5.26048C22,5.82797,21.66336,10.38220,21.44869,11.16484C20.89892,13.16647,19.29449,14.01409,17.62777,14.19367C18.75692,14.65768,19.49398,15.32821,19.75848,16.15476C20.06823,17.12377,19.68447,18.23725,18.67800,19.28981C17.39022,20.63632,16.18377,21.19226,15.09310,20.94132C13.32336,20.53463,12.38043,18.09934,12.00003,16.99174C11.61956,18.09977,10.67733,20.53417,8.90756,20.94132C8.73757,20.98051,8.56491,21,8.38934,21L8.38934,21"/></svg>';
    this.cache["x"] = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.8198 20.7684L3.75317 3.96836C3.44664 3.57425 3.72749 3 4.22678 3H6.70655C6.8917 3 7.06649 3.08548 7.18016 3.23164L20.2468 20.0316C20.5534 20.4258 20.2725 21 19.7732 21H17.2935C17.1083 21 16.9335 20.9145 16.8198 20.7684Z"></path><path d="M20 3L4 21"></path></svg>';

    this.update();
  }

  update() {
    this.elements = document.querySelectorAll(this.selector);

    this.elements.forEach(element => {

      // Skip elements that were already built
      if (element.children.length) return;

      // Skip elements that did not specify an icon name
      const name = element.dataset.icon;
      if (!name) return;

      // Update placeholder element with svg node
      const icon = this.get(name, element.ariaHidden);
      element.replaceWith(icon);
    });
  }

  get(name, ariaHidden) {
    // If icon is not in the cache object
    if (!(name in this.cache)) {
      // TODO: Fetch icon svg as string from media/icons/ and store it in cache
      return;
    }

    const string = this.cache[name];
    const svg = this.app.utils.html(string);

    // Add width and height
    svg.setAttribute("width", 24);
    svg.setAttribute("height", 24);

    // Add data-icon
    svg.dataset.icon = name;

    // Keep certain attributes
    svg.ariaHidden = ariaHidden;

    return svg;
  }
 
}