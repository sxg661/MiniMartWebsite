import Post from "./Post";

export default function Youtube() {

    const postHtml = `
    <div class="post-content"> 
        <p style="margin-bottom: 5px">I have recently started a youtube channel to document the progress of my game. I will try to upload videos as frequently as I can, so make sure to check for new content!</P>
        
        <a class="post-link" href="https://www.youtube.com/@defiantdaisy">See my channel here</a>
        <br/>
        <br/>
        <div class="post-image-container">
            <a href="https://www.youtube.com/@defiantdaisy"><img style="width:200px;" src="/images/daisylogoyoutube.png" title="source: image"></a>
        </div>
        
    </div>
    `

    const postData = {
        title: "Youtube",
        html: postHtml,
        time: null,
    }

    return(
        <Post postData={postData} IsSinglePost={true} HideCopyToClipboardButton={true}/>
    );
  }
  