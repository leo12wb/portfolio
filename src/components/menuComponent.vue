<template>
    <header class="header text-center">	    
        <div class="force-overflow">
          <h1 class="blog-name pt-lg-4 mb-0"><a class="no-text-decoration" href="">Simon Doe</a></h1>
          
          <nav class="navbar navbar-expand-lg navbar-dark">
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <div id="navigation" class="collapse navbar-collapse flex-column">
              <div class="profile-section pt-3 pt-lg-0">
                <img class="profile-image mb-3 rounded-circle mx-auto" src="front/document_files/profile.png" alt="image">			
                
                <div class="bio mb-3">Hi, my name is Simon Doe and I'm a senior software engineer. Welcome to my personal website!</div><!--//bio-->
                <ul class="social-list list-inline py-2 mx-auto">
                  <li class="list-inline-item"><a href=""><i class="fab fa-twitter fa-fw"></i></a></li>
                  <li class="list-inline-item"><a href=""><i class="fab fa-linkedin-in fa-fw"></i></a></li>
                  <li class="list-inline-item"><a href=""><i class="fab fa-github-alt fa-fw"></i></a></li>
                  <li class="list-inline-item"><a href=""><i class="fab fa-stack-overflow fa-fw"></i></a></li>
                  <li class="list-inline-item"><a href=""><i class="fab fa-codepen fa-fw"></i></a></li>
                </ul>
                <hr> 
              </div>
              
              <ul class="navbar-nav flex-column text-start">
                <li class="nav-item">
                  <a class="nav-link active" href=""><i class="fas fa-user fa-fw me-2"></i>About Me<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/portfolio.html"><i class="fas fa-laptop-code fa-fw me-2"></i>Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/services.html"><i class="fas fa-briefcase fa-fw me-2"></i>Services &amp; Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/resume.html"><i class="fas fa-file-alt fa-fw me-2"></i>Resume</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-home.html"><i class="fas fa-blog fa-fw me-2"></i>Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html"><i class="fas fa-envelope-open-text fa-fw me-2"></i>Contact</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-cogs fa-fw me-2"></i>More Pages
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/project.html">Project Page</a></li>
                    <li><a class="dropdown-item" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-home.html">Blog Home 1</a></li>
                    <li><a class="dropdown-item" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-home-alt.html">Blog Home 2</a></li>
                    <li><a class="dropdown-item" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/blog-post.html">Blog Post</a></li>
                  </ul>
                </li>
              </ul>
              
              <div class="my-2">
                <a class="btn btn-primary" href="https://themes.3rdwavemedia.com/devcard/bs5/2.0/contact.html" target="_blank"><i class="fas fa-paper-plane me-2"></i>Hire Me</a>
              </div>
              
      
              <div class="dark-mode-toggle text-center w-100">
                <hr class="mb-4">
                  <h4 class="toggle-name mb-3 "><i class="fas fa-adjust me-1"></i>Dark Mode</h4>
                  
                  <input class="toggle" id="darkmode" type="checkbox">
                  <label class="toggle-btn mx-auto mb-0" for="darkmode"></label>
                  
              </div>
              
            </div>
          </nav>
        </div>
    </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'menu',
})
</script>
