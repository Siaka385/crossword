const epoch="0001-01-01"
var addWeek=(date)=>{
    //calculate full year
    var fullyear=(dates)=>{
           var startyear=epoch.split("-")[0];
           var endyear=dates.split("-")[0];
        return (parseInt(endyear)-parseInt(startyear))*365
    }
     var months=(dates)=>{
        var starrmonth=epoch.split("-")[1];
        var endmonth=dates.split("-")[1];
     return (parseInt(endmonth)-parseInt(starrmonth))*30
     }
     var days=(dates)=>{
        var startdate=epoch.split("-")[2];
        var enddate=dates.split("-")[2];
     return parseInt(enddate)-parseInt(startdate)
     }

     var daysOfweek = [];
     var firstWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
     var secondWeek = firstWeek.map(day => "second" + day);
     daysOfweek = firstWeek.concat(secondWeek);
     var totaldays= fullyear(date)+months(date)+days(date)
     console.log(totaldays)
     if (totaldays<14){
        return daysOfweek[totaldays+1]
     }else if(totaldays%14 === 0){
        return daysOfweek[0]
     }else{
          let day=totaldays%14 
              return daysOfweek[day]
     }
}
console.log(addWeek("0001-01-16"))
