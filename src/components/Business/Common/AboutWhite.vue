<template>
	<div class="bg-white" id="about">
            <div class="container pt90 pb60">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb30">
                        <h3 class=" h1 font300 mb30">{{ $t("about.title") }}</h3>
                        <p>
                            {{ $t("about.content_a") }}
                        </p>
                        <p>
                            {{ $t("about.content_b") }}
                        </p><br>
                        <a href="resto-about.html" class="btn btn-dark">Read more</a>
                    </div>
                    <div class="col-lg-6 mb30">
                        <img src="/static/images/resto/about.png" alt="" class="img-fluid">
                    </div>              
                </div>
            </div>
        </div><!--intro-->
</template>
<script>
  export default {
    props: [ 'placeholder' ],
  }
</script>