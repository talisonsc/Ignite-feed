// props = objetos - conteudos das propriedades author "", content "",

export function Post(proptype) {
  return (
    <div>
      <strong>{proptype.author}</strong>
      <p>{proptype.content}</p>
    </div>
  )
}
