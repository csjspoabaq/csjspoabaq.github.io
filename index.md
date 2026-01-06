---
layout: default
title: "Inicio"
---

# Centro de Servicios Judiciales - SPOA Barranquilla
<p>![](https://komarev.com/ghpvc/?username=csjspoabaq&color=grey)</p>

Bienvenido a la página alterna del Centro de Servicios Judiciales del SPOA de Barranquilla.

Esta página mínima garantiza la presencia en linea del Centro de Servicios, por lo que se espera sea util para los usuarios internos y externos que solitan servicios al SPOA.

---

Para más información visite la pagina de 

- [Servicios]({{ '/pages/servicios' | relative_url }})

O para contactarnos

- [Contacto]({{ '/pages/contacto' | relative_url }})

---


### Publicaciones
---
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}<span> - {{post.date |  date:'%Y-%m-%d' }}</span></a>
    </li>
  {% endfor %}
</ul>