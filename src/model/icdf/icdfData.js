const icdfData = {
  first:
    '    The TaiwanICDF is dedicated to boosting socio-economic development, enhancing human resources and promoting economic relations in developing partner countries. We also offer humanitarian assistance and provide aid in the event of natural disasters or international refugee crises.',
  second:
    '    To carry out our mission, we offer a range of assistance that centers on four core operations: lending and investment, technical cooperation, humanitarian assistance, and international education and training. Our Fund is used to make direct or indirect investments and to finance lending operations. Revenues generated by the Fund are used to support our bilateral or multilateral technical cooperation projects, humanitarian assistance operations and education and training.',
  third:
    '    Our projects are designed to address the strategic development goals of each of our partner countries, pay due consideration to associated regional trends, and maximize results by employing the right combination of capital and technical cooperation. Our work is tailor-made to the local needs of each partner country, covering a variety of contemporary development issues such as environment, public health, agriculture, education, and information and communications technology.',
  forth:
    '    The Belize City Tour app has its origins in the Belize City House of Culture and Downtown Rejuvenation Project, jointly implemented by the TaiwanICDF and the Government of Belize since 2014. The project aims to promote awareness and appreciation of colonial heritage and cultural identity through the rejuvenation of a pilot selection of historical/colonial buildings, creating an eco-museum that will contribute to the development of sustainable cultural tourism.'
};
const imagePath = [
  require('../../../assets/GIF/TaiwanICDF.gif'),
  require('../../../assets/ICDFPage/photos/photo2.jpeg'),
  require('../../../assets/ICDFPage/photos/photo3.jpg')
];

export default (items = [
  {
    paragraph: icdfData.first
  },
  {
    colors: {
      upperColor: 'white',
      lowerColor: 'rgb(141,199,63)'
    },
    paragraph: icdfData.second,
    imagePath: imagePath[0]
  },
  {
    colors: {
      upperColor: 'rgb(141,199,63)',
      lowerColor: 'rgb(0,166,80)'
    },
    paragraph: icdfData.third,
    imagePath: imagePath[1]
  },
  {
    colors: {
      upperColor: 'rgb(0,166,80)',
      lowerColor: 'rgb(0,182,240)'
    },
    paragraph: icdfData.forth,
    imagePath: imagePath[2]
  }
]);