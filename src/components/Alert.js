import React from 'react'
//rfce function base react
function Alert(Props) {
  return (
    <div>

  {Props.alert &&  (<div class={`alert alert-success alert-${Props.alert === 'light' ? 'switch to light mode' : 'switch to dark mode'} alert-dismissible fade show`} role="alert">
  <strong>{Props.alert.msg}</strong> : {Props.alert.type}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>)
}
    </div>); 
}

export default Alert
//first of all i am makibg the state of allert and setalert in it i am making an function in it by the 
//name of shoe allert here i write the set allert after this i am snding alert as a component  in the alert 
//this method we used it becuse if props.allert will be nul then it does not show anything but we
// can also use if else in it we can pass prop.allert && it means we show allert and also show  messages inside it
// in class we use bactics and snd prop.alrt insite the function