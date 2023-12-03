import Post from "./Post";

export default function Youtube() {

    const postHtml = `
    <div class="post-content"> 
        <p style="margin-bottom: 5px">My youtube channel is coming soon! Keep an eye on this section for updates.</P>
        
        <div class="post-image-container">
            <iframe style = "max-width: 390px; max-height: 400px; border-radius: 5px" src="https://giphy.com/embed/sthmCnCpfr8M8jtTQy" width="472" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
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
  