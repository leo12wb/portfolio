<template>
    <header class="header text-center" style="width: 100%;overflow-y: clip;height: 348px;position: relative;
        background-color: #54a8b6;">	    
        <div class="force-overflow" style="padding-left:10%;padding-right:10%">
          <div class="row">
            
            <div class="col-md-12">
                <div class="profile-section pt-3 pt-lg-0">
                    
                    <img style="margin-top:20px" class="profile-image mb-3 rounded-circle mx-auto" src="front/document_files/profile.png" alt="image">			
                    
                    <h1 class="blog-name pt-lg-1 mb-0"><a class="no-text-decoration" style="font-size: 2.5rem;">Leonardo Rangel</a></h1>
                    <!--<div class="bio mb-3" style="font-size: 15px;">Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!</div>-->
                    <ul class="social-list list-inline py-2 mx-auto">
                        <li class="list-inline-item"><a href=""><i class="fab fa-twitter fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href=""><i class="fab fa-linkedin-in fa-fw"></i></a></li>
                        <li class="list-inline-item"><a href=""><i class="fab fa-github-alt fa-fw"></i></a></li>
                    </ul>
                </div>
            </div>

            <div class="col-md-8">  
                
            </div>
          </div>
        </div>
    </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'topo',
})
</script>
