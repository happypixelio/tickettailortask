document.getElementById('eventForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedEvents = Array.from(document.getElementById('events').selectedOptions)
    .map(option => option.value);

  let resultMessage = "";
  if (selectedEvents.length > 0) {
    const commaSeparatedEvents = selectedEvents.join(', ');
    resultMessage = "Great! You've have selected the following event(s): " + commaSeparatedEvents;
  } else {
    resultMessage = "Opps, No event selected. Try again."; 
  }

  document.getElementById('results').textContent = resultMessage;
});