
window.onload = function () {
  document.getElementById("date1").addEventListener("change", function() {
      let input = this.value;
      var dateEntered1 = new Date(input);
  });
  document.getElementById("date2").addEventListener("change", function() {
      let input = this.value;
      var dateEntered2 = new Date(input);
  });
}

function handleForm() {
  let fdate = new Date(document.getElementById("date1").value).getTime(),
      sdate = new Date(document.getElementById("date2").value).getTime(),
      days = formatNumbers((sdate - fdate) / 86400000),
      hours = formatNumbers((sdate - fdate) / 3600000),
      format = `${days} ${days > 1 ? 'days' : 'day'} or ${hours} hours`;
  if (isNaN(days)) {
    results("Please use valid dates!", true);
  } else if (fdate > sdate) {
    results("First date must be older than second date!", true);
  } else if (days == 0) {
    results("That's the same day!", true);
  } else {
    results(format, false);
  }
}

function formatNumbers(x){
  if (x != 1) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  } else {
    return x
  }
}

function results(x, err) {
  document.getElementById("ans").innerHTML = "";
  if (err == true) {
    let node = document.createElement("h2"),
        format = document.createTextNode(x);
    node.className = "error";
    node.appendChild(format);
    document.getElementById("ans").innerHTML = "";
    document.getElementById("ans").appendChild(node);
  } else {
    let node = document.createElement("h2"),
        format = document.createTextNode(x);
    node.appendChild(format);
    document.getElementById("ans").innerHTML = "";
    document.getElementById("ans").appendChild(node);
  }
}
