<script>
  export default {
    props: {
      comment: Object,
    },
  };
</script>

<template>
  <div class="commentList">
    <div class="commentListImg">
      <img
        src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1660761355~hmac=6520d0a8b7c90701fae3e1a573023927"
        alt=""
        style="height: 40px; width: 40px; border-radius: 50%"
      />
    </div>

    <div class="commentListUserComment">
      <div class="commentListUserName">{{ comment.User.username }}</div>
      {{ comment.comment }}
    </div>
  </div>
</template>

<style scoped>
  img {
    margin-top: 3px;
  }
  .commentListImg {
    padding-top: 5px;
  }
  .commentListUserComment {
    margin-left: 10px;
    padding-top: 5px;
  }
  .commentListUserName {
    display: inline-block;
    font-size: 21px;
    font-weight: 600;
    padding-top: 5px;
    margin-right: 5px;
  }
  .commentList {
    display: flex;
    flex-direction: row;
    padding: 5px;
    align-items: top;
    margin-top: 10px;
  }
</style>
