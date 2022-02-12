<template>
  <nav class="header">
    <a href="index.html">
      <div class="logo_title">
        <div class="logo">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip01_1325_56723)">
              <path d="M24.5664 25.6055V30.0586L19 32.4336L13.4336 30.0586V25.6055L19 23.3789L24.5664 25.6055Z"
                    fill="#B8C7E6"/>
              <path d="M24.5664 16.6992V21.1523L19 23.3789L13.4336 21.1523V16.6992L19 14.4727L24.5664 16.6992Z"
                    fill="#B8C7E6"/>
              <path d="M24.5664 21.1523V16.6992L19 14.4727V23.3789L24.5664 21.1523Z" fill="#A3B4D9"/>
              <path d="M24.5664 30.0586V25.6055L19 23.3789V32.4336L24.5664 30.0586Z" fill="#A3B4D9"/>
              <path d="M23.4531 11.1328H14.5469C13.9234 11.1328 13.4336 11.6226 13.4336 12.2461V16.6992H24.5664V12.2461C24.5664 11.6226 24.0766 11.1328 23.4531 11.1328Z"
                    fill="#CDD9F2"/>
              <path d="M24.5664 30.0586V32.4336C24.5664 32.723 24.455 33.0125 24.2323 33.2128L19.7792 37.6659C19.5789 37.8887 19.2895 38 19 38C18.7105 38 18.4211 37.8887 18.2208 37.6659L13.7677 33.2128C13.545 33.0125 13.4336 32.723 13.4336 32.4336V30.0586H24.5664Z"
                    fill="#CDD9F2"/>
              <path d="M13.4336 21.1523H24.5664V25.6055H13.4336V21.1523Z" fill="#CDD9F2"/>
              <path d="M19 38C19.2895 38 19.5789 37.8887 19.7792 37.6659L24.2323 33.2128C24.455 33.0125 24.5664 32.723 24.5664 32.4336V30.0586H19V38Z"
                    fill="#B8C7E6"/>
              <path d="M19 21.1523H24.5664V25.6055H19V21.1523Z" fill="#B8C7E6"/>
              <path d="M23.4531 11.1328H19V16.6992H24.5664V12.2461C24.5664 11.6226 24.0766 11.1328 23.4531 11.1328Z"
                    fill="#B8C7E6"/>
              <path d="M11.207 8.12705V12.2461C11.207 12.8695 11.6968 13.3594 12.3203 13.3594H25.6797C26.3032 13.3594 26.793 12.8695 26.793 12.2461V8.12705L19 5.90049L11.207 8.12705Z"
                    fill="#B8C7E6"/>
              <path d="M25.6797 13.3594C26.3032 13.3594 26.793 12.8695 26.793 12.2461V8.12705L19 5.90049V13.3594H25.6797Z"
                    fill="#A3B4D9"/>
              <path d="M28.7521 5.18796L26.7928 8.12703H11.2068L9.24745 5.18796C8.57963 4.18601 8.49049 2.87227 9.0694 1.78125C9.6483 0.690234 10.7839 0 12.0307 0H16.7732C17.3967 0 17.8865 0.48977 17.8865 1.11328C17.8865 1.73679 18.3763 2.22656 18.9998 2.22656C19.6233 2.22656 20.1131 1.73679 20.1131 1.11328C20.1131 0.48977 20.6028 0 21.2264 0H25.9689C27.2157 0 28.3512 0.690234 28.9302 1.78125C29.5092 2.87227 29.42 4.16367 28.7521 5.18796Z"
                    fill="#E5EDFF"/>
              <path d="M26.793 8.12703L28.7524 5.18796C29.4202 4.16367 29.5093 2.87219 28.9304 1.78125C28.3515 0.690309 27.2159 0 25.9691 0H21.2266C20.6031 0 20.1133 0.48977 20.1133 1.11328C20.1133 1.73679 19.6235 2.22656 19 2.22656V8.12703H26.793Z"
                    fill="#CDD9F2"/>
            </g>
            <defs>
              <clipPath id="clip0_1325_56723">
                <rect width="38" height="38" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div class="title_assistent">
          Virtueller Assistent
        </div>
      </div>
    </a>
    <a @click="showResponsiveNavigation" href="#" class="toggle-button">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </a>
    <div class="header-links">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="https://quizzical-keller-9651b4.netlify.app/" target="_blank">Auftragsübersicht</a></li>
        <li><a href="https://quizzical-keller-9651b4.netlify.app/" target="_blank">Neuer Auftrag</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default{
  methods: {
    showResponsiveNavigation(){
      const navbarLinks = document.getElementsByClassName('header-links')[0]
      navbarLinks.classList.toggle('navMobileActive')
    }
  }

}
</script>

<style>
.header {
  font-size: calc(14 * 0.063rem);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--header-Darkblue);
  color: white;
  height: 72px;
  padding-left: var(--paddingLeftRight);
  padding-right: var(--paddingLeftRight);
}

.header a {
  color: white;
}

a {
  text-decoration: none;
}

.logo_title {
  margin: .5rem;
  margin-left: 0;
  align-items: center;
  display: flex;
}

.logo {
  float: left;
}

.title_assistent {
  font-family: 'Oswald', sans-serif;
  font-size: calc(28 * 0.063rem);
  float: left;
  margin-top: calc(-5 * 0.063rem);
}

.header-links {
  height: 100%;
  align-items: center;
  display: flex;
}

.header-links ul {
  margin: 0;
  padding: 0;
  display: flex;
}

.header-links li {
  list-style: none;
}

.header-links li a {
  text-decoration: none;
  color: white;
  padding: 1rem;
  display: block;
}

.header-links li:hover a {
  background-color: var(--notification-Blue);
  border-radius: 5px;
}

.toggle-button {
  position: absolute;
  top: calc(20 * 0.063rem);
  right: 1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.toggle-button .bar {
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
}


</style>