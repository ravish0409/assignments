Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter Example</title>
</head>
<body>

<p id="counter">0</p>

<script>
  // Initialize counter variable
  let h=11;
  let m=59;
  let s = 55;
  let flag=0;
  // Function to update the counter and display it
  function updateCounter() {
    if(s==60){
      s=0;
      m++;
      if(m==60){
        m=0;
        h++;
        if(h==12){
          h=0;
          flag=~flag;
        }
      }
    }
    else s++;
    if(flag){
      g="am"
    }
    else{
      g="pm"
    }
    document.getElementById('counter').innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')} ${g}`;
    setTimeout(updateCounter, 1000);
  }

  // Set up the interval to update the counter every second
 updateCounter();
</script>

</body>
</html>
