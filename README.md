# App para corregir proyectos finales de React


## Propósito

Creé esta app para facilitarme el laburo de corregir proyectos finales, con los puntos más importantes a tener en cuenta al momento de las correcciones. Ahora lo tengo subido aquí para compartirlo con la comunidad de profes, y para hacer el trabajo más transparente. ☺️
## Cómo usar

Con respecto a utilizar la app, funciona sin ningún problema al momento de abrir el [deploy](https://carpicoder.github.io/app-corregir-react). Si querés saber más sobre cómo modificarla, te dejo algunos detalles debajo, pero podés explorar los archivos HTML y JS para verlo por tus propios ojos.

#### Agregar un ítem de corrección
En el HTML verás muchos `div` como este:
```html
<div>
    <h3 data-nombre="Navegabilidad">🔗 Navegabilidad</h3>
    <input checked type="checkbox" id="navegabilidad">
    <label for="navegabilidad">Usado ✅</label>
    <textarea id="comentarios-navegabilidad" rows="3"></textarea>
</div>
```
Lo único que hay que hacer es reemplazar la palabra clave (en el ejemplo, "Navegabilidad") en toda sus apariciones por la palabra que consideres sea el título para tu nuevo ítem.

#### Para que tengas en cuenta:
- `data-nombre` refiere al nombre que aparece del ítem cuando seleccionamos que **no** se incluye en el proyecto. Por ejemplo, en el mensaje *No hay Navegabilidad*.
- El texto en el `<h3>` con el ícono incluido es el que aparece en los ítems de corrección, como título principal de cada ítem.
- El `id` del `<input>` y el `for` del `<label>` existen por el único motivo de conectar uno con el otro.
- El `id` del `<textarea>` de momento no cumple ninguna función, pero está bueno de forma preventiva por si en el futuro agrego alguna funcionalidad que lo necesite.

## Sugerencias
Sentite libre de hacer alguna pull request o sugerencias sobre esto por alguna de mis redes sociales!