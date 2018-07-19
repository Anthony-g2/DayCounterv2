
window.onload = function () {
  document.getElementById("date1").addEventListener("change", function() {
      let input = this.value;
  });
  document.getElementById("date2").addEventListener("change", function() {
      let input = this.value;
  });
}

function handleForm() {
  let date1 = document.getElementById("date1").value,
      date2 = document.getElementById("date2").value,
      fdate = new Date(date1).getTime(),
      sdate = new Date(date2).getTime(),
      days = formatNumbers((sdate - fdate) / 86400000),
      hours = formatNumbers((sdate - fdate) / 3600000),
      format = `${days} ${days > 1 ? 'days' : 'day'} or ${hours} hours`;
  if (!date1 || !date2) {
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
