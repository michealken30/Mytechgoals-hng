document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );

  function updateTimeAndDay() {
    const now = new Date();
    currentTimeElement.textContent = `Current Time (UTC): ${now.toUTCString()}`;
    currentDayElement.textContent = `Current Day: ${now.toLocaleDateString(
      "en-US",
      { weekday: "long" }
    )}`;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 60000); // Update every minute
});
