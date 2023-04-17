import { events } from "./events.js";

$(document).ready(function () {
  renderEvents();
  filterEvents();
});

function renderEvents() {
  const eventsContainer = $("#events");
  eventsContainer.empty();

  events.forEach((event) => {
    const eventDiv = $("<div>").addClass("event " + event.category);

    const dateP = $("<p>").addClass("date").text(event.date);
    eventDiv.append(dateP);

    const eventTitle = $("<h2>").text(event.event);
    eventDiv.append(eventTitle);

    const linksUl = $("<ul>");
    event.links.forEach((link) => {
      const linkLi = $("<li>");
      const linkA = $("<a>")
        .attr("href", link.url)
        .attr("target", "_blank")
        .text(link.label);
      linkLi.append(linkA);
      linksUl.append(linkLi);
    });
    eventDiv.append(linksUl);

    eventsContainer.append(eventDiv);
  });

  $("#category-filter").on("change", filterEvents);

  function filterEvents() {
    const selectedCategory = $("#category-filter").val();
    const eventsContainer = $("#events");
    eventsContainer.empty();

    events.forEach((event) => {
      if (selectedCategory === "all" || selectedCategory === event.category) {
        const eventDiv = $("<div>").addClass("event " + event.category);

        const dateP = $("<p>").addClass("date").text(event.date);
        eventDiv.append(dateP);

        const eventTitle = $("<h2>").text(event.event);
        eventDiv.append(eventTitle);

        const linksUl = $("<ul>");
        event.links.forEach((link) => {
          const linkLi = $("<li>");
          const linkA = $("<a>")
            .attr("href", link.url)
            .attr("target", "_blank")
            .text(link.label);
          linkLi.append(linkA);
          linksUl.append(linkLi);
        });
        eventDiv.append(linksUl);

        eventsContainer.append(eventDiv);
      }
    });
  }
}
