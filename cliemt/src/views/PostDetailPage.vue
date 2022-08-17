<script></script>

<template>
  <div class="container">
    <div class="imgContainer">
      <img
        class="imagePost"
        src="https://i.pinimg.com/564x/d2/27/fb/d227fb4f70e449b8f5fb7c361c4f26d1.jpg"
        alt=""
      />
    </div>
    <div class="detailPost">
      <div class="BTNLIKE">
        <button>Like</button>
      </div>
      <div class="postedBy">
        <div class="p1">di unggah oleh :</div>
        <div class="posterName">Adam</div>
      </div>
      <div>
        <div class="postUser">
          <div>
            <img
              src="https://stringfixer.com/files/31927252.jpg"
              alt=""
              style="height: 40px; width: 40px; border-radius: 50%"
            />
          </div>
          <div class="userName">adam@gmail.com</div>
        </div>
      </div>
      <div class="contentPost">MANTAP SHIHO!</div>
      <div class="caption">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ex
        dignissimos maiores magnam molestiae, beatae rerum tempore magni
        voluptas est, consequuntur modi aliquid voluptatibus minus quas nesciunt
        assumenda! Libero, aliquid. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ullam, est explicabo tempora repellendus in fugiat,
        assumenda dolor corrupti cumque id itaque adipisci consequatur pariatur
        consequuntur maxime quis voluptate. Voluptate, consequatur!
      </div>
      <div class="commentContainer">
        <div class="labelComment">KOMENTAR :</div>
        <div class="commentList">
          <div class="commentListImg">
            <img
              src="https://stringfixer.com/files/31927252.jpg"
              alt=""
              style="height: 40px; width: 40px; border-radius: 50%"
            />
          </div>
          <div class="commentListUserName">Tanaka</div>
          <div class="commentListUserComment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              necessitatibus sequi tempora ad labore sapiente et neque, possimus
            </p>
          </div>
        </div>
        <div class="commentList">
          <div class="commentListImg">
            <img
              src="https://stringfixer.com/files/31927252.jpg"
              alt=""
              style="height: 40px; width: 40px; border-radius: 50%"
            />
          </div>
          <div class="commentListUserName">Tanaka</div>
          <div class="commentListUserComment">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              necessitatibus sequi tempora ad labore sapiente et neque, possimus
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .BTNLIKE {
    margin-top: 20px;
  }
  button {
    display: block;
    margin-left: auto;
    margin-right: 0;
    height: 30px;
    width: 100px;
    border-radius: 10px;
    border: rgb(136, 0, 0) solid;
    background-color: red;
    color: white;
    cursor: pointer;
  }
  .commentContainer {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
  }
  .container {
    margin: auto;
    margin-top: 50px;
    /* width: 50%; */
    max-width: 1016px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8),
      -12px 0 8px -4px rgba(31, 73, 125, 0.8);
    border-radius: 20px;
  }
  .postedBy {
    display: flex;
    flex-direction: row;
    font-size: 26px;
    padding: 10px;
    margin-top: 20px;
  }
  .postUser {
    display: flex;
    flex-direction: row;
    padding: 10px;
  }
  .posterName {
    margin-left: 10px;
    font-weight: bold;
  }
  .contentPost {
    margin-top: 26px;
    font-size: 36px;
    text-align: left;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .imgContainer {
    display: block;
    margin: 20px;
    padding: 5px;
  }
  img {
    width: 508px;
    border-radius: 20px;
    margin-right: 5px;
  }
  .detailPost {
    height: 100%;
    padding: 10px;
  }
  .userName {
    margin-top: auto;
    margin-bottom: auto;
  }
  .labelComment {
    margin-top: 20px;
    padding: 10px 10px 10px 0;
    font-weight: bold;
  }
  .caption {
    margin: 10px 10px 10px 0;
    padding: 5px;
    font-size: 18px;
  }
  .commentList {
    display: flex;
    flex-direction: row;
    padding: 5px;
    align-items: top;
    margin-top: 10px;
  }

  .commentListUserComment {
    margin-left: 10px;
    padding-top: 5px;
  }
  p {
    padding: 0 5px 5px 0;
    font-size: 18px;
  }
  .commentListUserName {
    font-size: 21px;
    font-weight: 600;
    padding-top: 5px;
  }
  .commentListImg {
    padding-top: 5px;
  }
</style>
