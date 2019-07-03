<template>
	<div class="bg-faded pt90 pb90">
            <div class="container">
                <div class="title-heading1 mb50">
                    <h3>{{ $t("message.hello") }}</h3>
                </div>
                <div class="row">
                    <div class="col-lg-6 mr-auto ml-auto">
                        <form id="widget-subscribe-form" action="index.html" role="form" method="post" class="mb0">
                            <div class="input-group input-group-lg">

                                <input type="email" name="widget-subscribe-form-email" class="form-control required" placeholder="Enter your Email">
                                <span class="input-group-btn">
                                    <button class="btn btn-primary" type="submit">Subscribe</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>