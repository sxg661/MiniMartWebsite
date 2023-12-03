import Post from "./Post";

export default function AboutMe() {

    const postHtml = `
    <div class="post-content"> 
        <p>My name is Defaint Daisy and I am a hobbiest games developer. 
        I am currently working on a Supermarket simulator game called Mini Mart.
        </p>
        <p>This blog is where I will post updates on my game's progress and thoughts on the future of the project.</p>
        <br>
        <p>Check out some of my past projects:<p>

        <h4 style="margin-bottom: 5px"><a class="post-link" href="https://defiantdaisygames.itch.io/spider-hunt">Spider Hunt</a></h4>
        <p style="margin-bottom: 5px">A small game I made for a University Game Jam</p>
        <div class="post-image-container">
            <img src="https://imgur.com/AjrZG1N.png" title="source: imgur.com"/>
        </div>
        </br>

        <h4 style="margin-bottom: 5px"><a class="post-link" href="https://defiantdaisygames.itch.io/mrs-pumpkin-patches-enless-nightmare">Mrs Pumpkin Patch's Endless Nightmare</a></h4>
        <p style="margin-bottom: 5px">My first attempt at procedural generation</p>
        <div class="post-image-container">
            <img src="https://imgur.com/PF48vnM.png" title="source: imgur.com"/>
        </div>

        <h4 style="margin-bottom: 5px"><a class="post-link" href="https://defiantdaisygames.itch.io/overruled-court-is-now-in-session">Overruled! Court is now in Session</a></h4>
        <p style="margin-bottom: 5px">My first every unity game</p>
        <div class="post-image-container">
            <img src="https://imgur.com/HvZUUuw.png" title="source: imgur.com"/>
        </div>

    </div>
    `

    const postData = {
        title: "About Me",
        html: postHtml,
        time: null,
    }

    return(
        <Post postData={postData} IsSinglePost={true} HideCopyToClipboardButton={true}/>
    );
  }
  