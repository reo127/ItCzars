console.log('somehting chapture the flag');
function demoMatchClick() {
    var re = new RegExp(document.demoMatch.regex.value);
    if (document.demoMatch.subject.value.match(re)) {
      alert("Successful match");
    } else {
      alert("No match");
    }
  }
  
  function thisIsthefinalflagmaby() {
    var re = new RegExp(document.demoMatch.regex.value);
    var m = re.exec(document.demoMatch.subject.value);
    if (m == null) {
      alert("No match");
    } else {
      var s = "Match at position " + m.index + ":\n";
      for (i = 0; i < m.length; i++) {
        s = s + m[i] + "\n";
      }
      alert(s);
    }
  }
  
  function demoReplaceClick() {
    var re = new RegExp(document.demoMatch.regex.value, "g");
    document.demoMatch.result.value =
      document.demoMatch.subject.value.replace(re,
        document.demoMatch.replacement.value);
  }