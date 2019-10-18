'use strict';
{
    const mondayTasks = [
        {
          name: 'Daily standup',
          duration: 30, // specified in minutes
        },
        {
          name: 'Feature discussion',
          duration: 120,
        },
        {
          name: 'Development time',
          duration: 240,
        },
        {
          name: 'Talk to different members from the product team',
          duration: 60,
        },
      ];
      
      function priceOfHours(durationEl) {
        return durationEl.duration / 60 * 25;
      };
      
     let allPrice = mondayTasks.map(priceOfHours);
     let sumAllPrice = allPrice.reduce(sumPrices);
     function sumPrices(accumulator, currentValue) {
        return accumulator + currentValue;
     };
     console.log(sumAllPrice);
}