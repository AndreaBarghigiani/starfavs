function LoremIpsum({ length = "full" }) {
  const string = `Proin hac euismod dapibus a sapien parturient ornare gravida et curabitur
      curabitur est semper a placerat. Sapien nostra rhoncus ad conubia cum
      aliquam aliquam cubilia cum imperdiet sagittis pulvinar a facilisis non
      porta suscipit consectetur lorem praesent a ridiculus mi gravida
      parturient habitasse fermentum. Posuere ante etiam consectetur scelerisque
      rhoncus viverra scelerisque at ac suspendisse facilisis vivamus sodales
      suspendisse duis ornare pharetra molestie condimentum. Netus et a in sem
      pharetra id laoreet sociosqu scelerisque sed parturient primis ullamcorper
      dignissim platea fringilla dui in. Vestibulum euismod natoque conubia
      dapibus a habitant donec torquent in a arcu lobortis hac vitae dis justo
      consequat eleifend suspendisse semper a ultrices. Massa at ad congue ad eu
      suspendisse accumsan sodales a quam vestibulum ullamcorper a ut inceptos
      turpis dictumst enim parturient primis dapibus a parturient dis imperdiet
      a tristique a. Odio eros a sociosqu ad fusce vestibulum iaculis orci arcu
      adipiscing ac condimentum fringilla torquent id mauris nec purus inceptos
      ut metus enim volutpat laoreet. Condimentum erat dis blandit morbi cras
      lacinia parturient at vestibulum fames purus eget accumsan mauris duis
      parturient neque maecenas quis ac varius felis pulvinar cum eu
      sed.Ridiculus a cursus conubia sagittis hac vestibulum per a a duis eu
      vestibulum.`;
  return (
    <p className="my-4">
      {length === "full" ? string : string.substring(0, length) + "..."}
    </p>
  );
}

export default LoremIpsum;
