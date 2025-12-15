import Post from "./Post";

export default function AboutMe() {

    const postHtml = `
    <div class="post-content"> 
        <p>My name is Defaint Daisy and I am a hobbyist games developer. 
        I am currently working on a Supermarket simulator game called Mini Mart.
        </p>
        <p>This blog is where I will post updates on my game's progress and thoughts on the future of the project.</p>
        <br>
        <p>Check out some of my past projects:<p>

        <h4 style="margin-bottom: 5px"><a class="post-link" href="https://vulcanstorm.itch.io/sisyphus">Sisyphus</a></h4>
        <p style="margin-bottom: 5px">A Sisyphus boulder pushing game made in Godot. I collaborated on this as part of a game jam. Push the boulder up the hill to get stickers for your boulder. I designed the stickers!</p>
        <div class="post-image-container">
            <img src="https://img.itch.zone/aW1nLzE1NjgzNjk5LnBuZw==/315x250%23c/XxVsNf.png" title="source: imgur.com"/>
        </div>
        </br>

        <h4 style="margin-bottom: 5px"><a class="post-link" href="https://defiantdaisygames.itch.io/spider-hunt">Spider Hunt</a></h4>
        <p style="margin-bottom: 5px">A small game I made for a university game jam. Catch the spider before time runs out!</p>
        <div class="post-image-container">
            <img src="/images/catchthespider.png" title="source: imgur.com"/>
        </div>
        </br>

        <h4 style="margin-bottom: 5px"><a class="post-link" href="https://defiantdaisygames.itch.io/mrs-pumpkin-patches-enless-nightmare">Mrs Pumpkin Patch's Endless Nightmare</a></h4>
        <p style="margin-bottom: 5px">A Halloween themed game. I did the programming and my friend did the art and music. This is my first attempt at procedural generation.</p>
        <div class="post-image-container">
            <img src="/images/PumpkinPatch.png" title="source: imgur.com"/>
        </div>

        <h4 style="margin-bottom: 5px"><a class="post-link" href="https://defiantdaisygames.itch.io/overruled-court-is-now-in-session">Overruled! Court is now in Session</a></h4>
        <p style="margin-bottom: 5px">My first every unity game. My friend did the art and music for this, and I did most of the programming.</p>
        <div class="post-image-container">
            <img src="/images/Overulled.png" title="source: imgur.com"/>
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
  