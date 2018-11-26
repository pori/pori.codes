<template>
  <div class="footer">
    <div>
      <h4>Let's Chat</h4>
      <p>
        I’m always happy to have a conversation about 
        <a href="https://www.goodreads.com/book/show/17290807-the-design-of-everyday-things" target="_blank">design</a>, 
        <a href="https://www.goodreads.com/book/show/4845.Code_Complete?ac=1&from_search=true" target="_blank">code</a>, 
        <a href="https://www.goodreads.com/book/show/48757.The_Tao_of_Pooh" target="_blank">taoism</a>, 
        <a href="https://weather.com/weather/today/l/Portland+ME+04101:4:US" target="_blank">the weather</a>, 
        <a href="https://en.wikipedia.org/wiki/Arnolfini_Portrait" target="_blank">The Arnolfini Portrait</a>... anything really!
      </p>

      <p>Send me a message via <i>porialex at Google mail</i>. You can also find my social profiles at the bottom of this page.</p>
    </div>
    <div>
      <h4>This Website</h4>
      <p>
        Designed in Figma. 
        <a href="https://www.figma.com/file/JaOqXIiz0y5vuCIRzsyVUpsY/Portfolio" target="_blank">You can view mockups and process online.</a>
      </p>
      <p>
        Built on VuePress. 
        <a href="https://github.com/pori/pori.design" target="_blank">Take a look at the code.</a>
      </p>
      <p>
        Primary color chosen is 
        <a href="https://en.wikipedia.org/wiki/Baker-Miller_pink#History" target="_blank">Baker-Miller pink
        </a>.
      <p>
        Type set in 
        <a href="https://www.typewolf.com/site-of-the-day/fonts/libre-baskerville" target="_blank">Libre Baskerville</a> 
        &amp; 
        <a href="https://www.typewolf.com/site-of-the-day/fonts/libre-franklin" target="_blank">Libre Franklin</a>.
      </p>
      <p>Icons provided by <a href="https://feathericons.com/" target="_blank">Feather</a>.</p>
    </div>
    <div>
      <h4>Thank You</h4>
      <p>There are lot of people I have met over the past year or so that have had a big impact on me. Whether we’ve had multiple outings, or even one brief conversation, I thank you for helping me find me.</p>
      <p>
        <a href="https://twitter.com/linsydeanna" target="_blank">Linsy Joyner</a>, 
        <a href="https://twitter.com/AnnaGerber" target="_blank">Anna Gerber</a>, 
        <a href="https://twitter.com/MichielBijl" target="_blank">Moiety</a>, 
        <a href="https://twitter.com/sarah_j_smith" target="_blank">Sarah Smith</a>, 
        <a href="https://twitter.com/nellarro" target="_blank">Jenelle Pizarro</a>, 
        <a href="https://twitter.com/greggpollack" target="_blank">Gregg Pollack</a>,  
        <a href="https://twitter.com/AdamJahr" target="_blank">Adam Jahr</a>, 
        <a href="https://twitter.com/DavidKPiano" target="_blank">David K. 🎹</a>, 
        <a href="https://twitter.com/AshKyd" target="_blank">Ash Kyd</a>,
        <a href="https://twitter.com/whatsyrdamage" target="_blank">Greg Leibowitz</a>, 
        <a href="https://twitter.com/mirisuzanne" target="_blank">Miriam Suzanne</a>, 
        <a href="https://twitter.com/sarah_edo" target="_blank">Sarah Drasner</a>, 
        <a href="https://twitter.com/chrisvfritz" target="_blank">Chris Fritz</a>, 
          &amp; many, many others.
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 1em;

  h4 {
    font-weight: bold;
    color: var(--primary);
  }
}
</style>