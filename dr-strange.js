const epoch="0001-01-01"
var addWeek=(date)=>{
    //calculate full year
    var fullyear=(dates)=>{
           var startyear=epoch.split("-")[0];
           var endyear=dates.split("-")[0];
        return parseInt(endyear)-parseInt(startyear)
    }
     var months=(dates)=>{
        var starrmonth=epoch.split("-")[1];
        var endmonth=dates.split("-")[1];
     return parseInt(endmonth)-parseInt(starrmonth)
     }
     var days=(dates)=>{
        var startdate=epoch.split("-")[2];
        var enddate=dates.split("-")[2];
     return parseInt(enddate)-parseInt(startdate)
     }


    return months(date)
}
console.log(addWeek("0001-12-01"))
