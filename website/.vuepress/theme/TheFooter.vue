<template>
  <div class="footer">
    <div>
      <h4>Let's Chat</h4>
      <p>
        I’m always happy to have a conversation about 
        <a href="https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654/ref=sr_1_1?ie=UTF8&qid=1527786684&sr=8-1&keywords=the+design+of+everyday+things" target="_blank">design</a>, 
        <a href="https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670/ref=sr_1_1?s=books&ie=UTF8&qid=1527786943&sr=1-1&keywords=code+complete" target="_blank">code</a>, 
        <a href="https://weather.com/weather/today/l/40.73,-111.88" target="_blank">the weather</a>, 
        <a href="https://en.wikipedia.org/wiki/Arnolfini_Portrait" target="_blank">The Arnolfini Portrait</a>... anything really!
      </p>

      <p>Send me a message via <i>porialex at Google mail</i>. You can also find my social profiles at the bottom of this page.</p>
    </div>
    <div>
      <h4>This Website</h4>
      <p>
        Designed in Figma. 
        <a href="#" target="_blank">You can view mockups and process online.</a>
      </p>
      <p>
        Built on VuePress. 
        <a href="#" target="_blank">Take a look at the code.</a>
      </p>
      <p>
        Primary color chosen is 
        <a href="https://en.wikipedia.org/wiki/Baker-Miller_pink#History" target="_blank">Baker-Miller pink
        </a>.
      <p>
        Type set in 
        <a href="#" target="_blank">Libre Baskerville</a> 
        &amp; 
        <a href="#" target="_blank">Libre Franklin</a>.
      </p>
      <p>Icons provided by <a href="#" target="_blank">Feather</a>.</p>
    </div>
    <div>
      <h4>Thank You</h4>
      <p>There are lot of people I have met over the past year or so that have had a big impact on me. Whether we’ve had multiple outings, or even one brief conversation, I thank you for helping me find me.</p>
      <p>
        <a href="#" target="_blank">Linsy Joyner</a>, 
        <a href="#" target="_blank">Jenelle Pizarro</a>, 
        <a href="#" target="_blank">Gregg Pollack</a>,  
        <a href="#" target="_blank">Adam Jahr</a>, 
        <a href="#" target="_blank">David Khourshid</a>, 
        <a href="#" target="_blank">Ash Kyd</a>, 
        <a href="#" target="_blank">Greg Leibowitz</a>, 
        <a href="#" target="_blank">Miriam Suzanne</a>, 
        <a href="#" target="_blank">Sarah Drasner</a>, 
        <a href="#" target="_blank">Chris Fritz</a>, 
          &amp; many, many others.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1em;

  h4 {
    font-weight: bold;
    color: var(--primary);
  }
}
</style>