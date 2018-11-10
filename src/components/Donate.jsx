import React from "react";

function Donate(){
  var donateStyles = {
    padding: '1em',
  }
  var buttonStyles = {
    color: '#262626',
    backgroundColor: '#ffdb00',
    borderRadius: '25px',
    padding: '10px',
    textDecoration: 'none',
    display: 'inline-block',
    border: 'none',
    fontWeight: 'bold',
  }
  var donationStyles = {
    margin: '1em 2em',
    lineHeight: '.7em',
  }
  var monthlyStyles = {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    borderBottom: 'solid 1px lightgray',
    margin: '0 auto',
  }
  var loving = {
    background: '#191919',
    padding: '1em',
  }
  return(
		<div style={donateStyles}>
      <div style={loving}>
        <a href="https://www.brainpickings.org/donate/"><img src="https://www.brainpickings.org/wp-content/themes/brainpickings/images/donating_equals_loving@2x.png" alt="loving = donating" onmouseover="this.src='https://www.brainpickings.org/wp-content/themes/brainpickings/images/donating_equals_loving-over@2x.png'" onmouseout="this.src='https://www.brainpickings.org/wp-content/themes/brainpickings/images/donating_equals_loving@2x.png'" width="200" height="122" scale="2"/></a>
      </div>
      <p><em>Brain Pickings</em> remains free (and ad-free) and takes me hundreds of hours a month to research and write, and thousands of dollars to sustain.</p>
      <p>If you find any joy and value in what I do, please consider becoming a Sustaining Patron with a recurring monthly donation of your choosing, between a cup of tea and a good lunch:</p>

      <h4 style={monthlyStyles}><strong>MONTHLY DONATION</strong></h4>

      <div style={donationStyles}>
        <p>♥ $3 / month</p>
        <p>♥ $5 / month</p>
        <p>♥ $7 / month</p>
        <p>♥ $10 / month</p>
        <p>♥ $25 / month</p>
      </div>

      <h4><a style={buttonStyles} href="https://www.brainpickings.org/donate/">START NOW</a></h4>

      <h4 style={monthlyStyles}><strong>ONE-TIME DONATION</strong></h4>

			<p>You can also become a Spontaneous Supporter with a one-time donation in any amount:</p>

			<h4><a style={buttonStyles} href="https://www.brainpickings.org/donate/">GIVE NOW</a></h4>

      <p>Need to cancel a recurring donation? <a href="https://www.brainpickings.org/cancel-recurring-donation/"><strong>Go here</strong></a>.</p>
		</div>
  );
}

export default Donate;