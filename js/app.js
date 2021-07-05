am4core.useTheme(am4themes_animated);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [
  {
    day: "Day 0",
    date: "23 May, 2021",
    limit: 10,
    fb: "09.59am",
    ln: "2.00pm",
    tw: "09.45pm",
  },
  {
    day: "Day 1",
    date: "24 May, 2021",
    limit: 12,
    fb: "10.59am",
    ln: "3.00pm",
    tw: "10.45pm",
  },
  {
    day: "Day 3",
    date: "25 May, 2021",
    limit: 17,
    fb: "11.59am",
    ln: "4.00pm",
    tw: "5.45pm",
  },
  {
    day: "Day 4",
    date: "26 May, 2021",
    limit: 18,
    fb: "1.19am",
    ln: "3.00pm",
    tw: "2.45pm",
  },
  {
    day: "Day 5",
    date: "27 May, 2021",
    limit: 19,
    fb: "1.19am",
    ln: "3.00pm",
    tw: "2.45pm",
  },
  {
    day: "Day 6",
    date: "28 May, 2021",
    limit: 10,
    fb: "12.59am",
    ln: "6.00pm",
    tw: "8.45pm",
  },
  {
    day: "Day 7",
    date: "29 May, 2021",
    limit: 10,
    fb: "3.59am",
    ln: "2.00pm",
    tw: "6.45pm",
  },
  {
    day: "Day 8",
    date: "30 May, 2021",
    limit: 10,
    fb: "3.59am",
    ln: "2.00pm",
    tw: "6.45pm",
  },
  {
    day: "Day 9",
    date: "31 May, 2021",
    limit: 10,
    fb: "3.59am",
    ln: "2.00pm",
    tw: "6.45pm",
  },
];

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "day";
categoryAxis.renderer.grid.template.disabled = true;

/* Create value axis */
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.baseGrid.disabled = true;
valueAxis.renderer.grid.template.disabled = true;

var tooltipHTML = `
<div class="tip">
<div class="row">
  <div class="col-left header">{date} <span class="day__tag">{day}</span></div>
  <div class="col-right header__count">96</div>
</div>
<div class="row active"> 
  <div class="col-left">
    <span class="icon-wrap icon__1 rounded"><i class="fas fa-check-circle icon__check"></i></span>
    <span class="icon-wrap icon__2 fb-icon"><i class="fab fa-facebook-f"></i></span>
    <span class="description">Missinglettr . {fb}</span>
  </div>
  <div class="col-right">96</div>
</div>
<div class="row">
  <div class="col-left">
    <span class="icon-wrap icon__1 rounded"><i class="fas fa-clock"></i></span>
    <span class="icon-wrap icon__2 ln-icon"><i class="fab fa-linkedin-in"></i></span>
    <span class="description">Missinglettr . {ln}</span>
  </div>
  <div class="col-right">0</div>
</div> 
  <div class="row">
    <div class="col-left">
      <span class="icon-wrap icon__1 rounded"><i class="fas fa-clock"></i></span>
      <span class="icon-wrap icon__2 twitter-icon"><i class="fab fa-twitter"></i></span>
      <span class="description">Missinglettr . {tw}</span>
    </div>
    <div class="col-right">0</div>
</div> 

</div>
`;

var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "limit";
series.dataFields.categoryX = "day";
series.name = "Days";
series.strokeWidth = 3;
series.tensionX = 0.7;
series.bullets.push(new am4charts.CircleBullet());

series.tooltipHTML = tooltipHTML;
series.tooltip.label.interactionsEnabled = true;
series.tooltip.pointerOrientation = "vertical";

series.tooltip.getFillFromObject = false;
series.tooltip.background.fillOpacity = 10;

var XaxisTooltip = categoryAxis.tooltip;
XaxisTooltip.background.fill = am4core.color("#0c78eb");
XaxisTooltip.background.strokeWidth = 0;
XaxisTooltip.background.cornerRadius = 3;
XaxisTooltip.background.pointerLength = 0;
XaxisTooltip.dy = 5;

var YaxisTooltips = valueAxis.tooltip;
YaxisTooltips.background.fill = am4core.color("#0c78eb");
YaxisTooltips.background.strokeWidth = 0;
YaxisTooltips.background.cornerRadius = 3;
YaxisTooltips.background.pointerLength = 0;
YaxisTooltips.dy = 5;

/* Add legend */
chart.legend = new am4charts.Legend();

/* Create a cursor */
chart.cursor = new am4charts.XYCursor();
chart.cursor.maxTooltipDistance = -1;
