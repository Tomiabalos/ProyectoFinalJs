function capturar(){
      function Servicios(empresa,servicios){
        this.empresa=empresa
        this.servicios=servicios

      }

      
      var empresaCapturar = document.getElementById("empresa").value;
      var serviciosCapturar = document.getElementById("servicios").value;
      nuevoUsuario = new Servicios(empresaCapturar, serviciosCapturar)
      console.log(nuevoUsuario);
      agregar();
  };

      var baseDatos = [];
      function agregar(){
        baseDatos.push(nuevoUsuario);
        console.log(baseDatos);
        document.getElementById("tabla").innerHTML +="<tbody><td>"+nuevoUsuario.empresa+"</td><td>"
        +nuevoUsuario.servicios+"</td></tbody>";
      };





     

Vue.config.devtools = true;

Vue.component('card', {
  template: `
    <div class="card-wrap"
      @mousemove="handleMouseMove"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="card">
      <div class="card"
        :style="cardStyle">
        <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
        <div class="card-info">
          <slot name="header"></slot>
          <slot name="content"></slot>
        </div>
      </div>
    </div>`,
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
  },
  props: ['dataImage'],
  data: () => ({
    width: 0,
    height: 0,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null }),

  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)` };

    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)` };

    },
    cardBgImage() {
      return {
        backgroundImage: `url(${this.dataImage})` };

    } },

  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    } } });



const app = new Vue({
  el: '#app' });


 window.onload = function () {
    setTimeout(function () {
    document.getElementById('hero-background').style.width = '100%';
    }, 1500);
    setTimeout(function () {
      document.getElementById('hero-text').style.opacity = '1';
    }, 2500);
    setTimeout(function () {
      document.getElementById('hero-img').style.opacity = '1';
    }, 3500);
    setTimeout(function () {
      document.getElementById('lines').style.opacity = '1';
    },4500);
  };