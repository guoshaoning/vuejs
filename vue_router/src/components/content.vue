<template>
  <div class="content">
    <div id="content">
      <div class="books" v-for="book in books">
        <a :href="'detail.html?id=' + book.id"><img :src="book.url" class="bleft"/></a>
        <div class="bright">
          <h4><a :href="'detail.html?id=' + book.id">{{book.name}}</a></h4>
          <p>{{book.author}}</p>
          <p>{{book.price}}</p>
          <p>{{book.content | cutWord}}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import book1 from './assets/book1.png'
  import book2 from './assets/book2.png'
  import book3 from './assets/book3.png'
  import book4 from './assets/book4.png'
  import book5 from './assets/book5.png'
  import book6 from './assets/book6.png'
  import book7 from './assets/book7.png'
  import book8 from './assets/book8.png'
  import book9 from './assets/book9.png'
  import book10 from './assets/book10.png'
  export default {
    name: 'content',
    data () {
      return {
        books:[{
          'id':1,
          'name':'小狗钱钱',
          'author':'(德)博多·舍费尔',
          'price':'¥29.9',
          'content':'吉娅是一个普通的12岁女孩，一次偶然的机会，她救助了一只受伤的小狗，并给它取名叫“钱钱”。没想到，钱钱居然是一位深藏不露的理财高手，它彻底改变了吉娅一家人的财富命运……“欧洲第一理财大师”博多·舍费尔用生动的理财童话，教会你如何从小学会支配金钱。',
          'url':book1
        },
          {
            'id':2,
            'name':'三国演义',
            'author':'（明）罗贯中',
            'price':'¥33.3',
            'content':'《三国演义》全称为《三国志通俗演义》，据说它的创作取材于宋代说书故事。元末明初罗贯中综合民间传说和戏曲、话本，结合陈寿《三国志》和裴松之注的史料，根据他个人对社会人生的体悟，创作了《三国志通俗演义》。',
            'url':book2
          },
          {
            'id':3,
            'name':'查理和巧克力工厂',
            'author':'罗尔德·达尔',
            'price':'¥19.9',
            'content':'在查理生活的小镇上有一个全世界*的巧克力工厂，工厂非常神秘，大门紧锁，从来没有人从大门去或出来过。有一天，工厂的主人威利·旺卡先生发出告示，他将邀请五位幸运的孩子参观巧克力工厂，全世界旺卡巧克力的孩子都有机会。前提是得到藏在包装纸里的金奖券。',
            'url':book3
          },
          {
            'id':4,
            'name':'给孩子读诗',
            'author':'果麦',
            'price':'¥69.9',
            'content':'生活不只是衣食住行，还有诗和远方。《给孩子读诗》愿孩子们在人之初聆听到优美动听的汉语，那可能是他们爱上阅读、走向远方的原点。 《给孩子读诗》中的一百首诗，跨越三千年历史，来自33个国度的100位诗人。',
            'url':book4
          },
          {
            'id':5,
            'name':'三毛流浪记',
            'author':'张乐平',
            'price':'¥39.9',
            'content':'《三毛流浪记》是我国漫画大师张乐平的惊世之作,这部不朽的作品曾在我国产生过巨大的影响,作品的主角三毛是我国几代读者所熟悉所喜爱的人物。三毛曾五次被搬上银幕和荧屏,舆论界认为其堪与卓别林的《寻子遇仙记》媲美,在中国电影史上占有重要的地位。',
            'url':book5
          },
          {
            'id':6,
            'name':'白说',
            'author':'白岩松',
            'price':'¥40',
            'content':'《白说》是央视资深新闻人白岩松继《幸福了吗》《痛并快乐着》之后的全新作品，一部“自传”式的心灵履历。通过近年来于各个场合与公众的深入交流，以平等自由的态度，分享其世界观和价值观。',
            'url':book6
          },
          {
            'id':7,
            'name':'我们从未陌生过',
            'author':'韩寒',
            'price':'¥35',
            'content':'韩寒亲任主编的“ONE·一个”精选书系第七部《我们从未陌生过》，APP精选27篇好文独家放送。 原创文学*战力再次集结，新生力量VS“一个”实力老将。 　　本书沿袭前六部的独特风格，在文稿上做了更精细的挑选，特邀何炅、张皓宸、大冰、荞麦、咸贵人的独家好文。',
            'url':book7
          },
          {
            'id':8,
            'name':'灵魂只能独行',
            'author':'周国平',
            'price':'¥32',
            'content':'大学校园里一直流传着“男生不可不读王小波，女生不可不读周国平”之说，周国平的散文以情理并茂、哲理和诗情交融著称，二十余年来长销不衰，滋养了数代年轻人的心灵。这一套《周国平散文经典》精选了作者*秀的散文作品，按照主题分为四卷，周国平称其为“历年来编选得最好的”版本。',
            'url':book8
          },
          {
            'id':9,
            'name':'仓央嘉措诗传全集',
            'author':'闫晗',
            'price':'¥38',
            'content':'仓央嘉措的一生是个难以捉摸的谜，也是一个永恒不朽的传奇。这个谜一样的男子，对我们来说，是那么熟悉，却又那么陌生。陌生到我们只知道这个名字，只知道他是诗人。他是一个僧人，却写尽了凡尘俗世的情与爱，他的情诗犹如青藏高原的明珠．照亮了无数男女的心房。他的传奇、他的故事让人们为之着迷。',
            'url':book9
          },
          {
            'id':10,
            'name':'世界很大，幸好有你',
            'author':'杨澜',
            'price':'¥69.9',
            'content':'这本书是继1996年《凭海临风》之后，著名媒体人杨澜女士20年来，全新个人创作的散文作品集，杨澜以“大女生”的视角，讲述她的婚姻、她的儿女、她的家庭、她理解的幸福力。',
            'url':book10
          }
        ]
      }
    },
    filters:{
      cutWord:function (value) {
        var word = value.substring(0,20);
        return word + '...';
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul li{
    list-style-type: none;
  }
  /*content*/
  #content{
    margin:2% 7%;
  }
  .books{
    height: 170px;
    float: left;
    padding-bottom:20px;
  }
  .bleft{
    float: left;
  }
  .bright{
    float: left;
    width:150px;
    padding-right: 20px;
  }
  .bright h4{
    margin-left: 15px;
  }
  .bright p{
    margin: 10px 0 0 15px;
  }
</style>
