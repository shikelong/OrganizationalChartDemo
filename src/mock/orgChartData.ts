const cache = {};

function importAll(r: any) {
  r.keys().forEach((key: any) => (cache[key] = r(key)));
}

importAll(require.context("../images", true, /\.png$/));

console.log("cache: ", cache);

const generatorAvatars = () => {
  const imgLength = Object.keys(cache).length;
  //@ts-ignore
  return Object.values(cache)[Math.ceil(Math.random() * (imgLength - 1))]
    .default;
};

export type Employee = {
  name: string;
  id: string;
  description?: string;
  avatar?: string;
  isLeader: boolean;
};

export type Bumon = {
  id: string;
  name: string;
  staff?: Employee[];
  children?: Bumon[];
  //一行最多显示的人的数量
  rowCount?: number;
};

export const datas: Bumon = {
  id: "d-1",
  name: "学校法人　グレープ学園",
  children: [
    {
      name: "葡萄大学",
      id: "100",
      staff: [],
      children: [
        {
          name: "科学研究科",
          id: "112",
          staff: [
            {
              name: "出口奈那",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: true,
            },
            {
              name: "鈴木治彦",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "新田武英",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "根本十三",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "川嶋国彦",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "西篤",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "寺岡武",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "米山正吉",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "福島夢",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "井手文夫",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
            {
              name: "百瀬隆志",
              id: "1",
              avatar: generatorAvatars(),
              isLeader: false,
            },
          ],
        },
        {
          name: "情報工学科",
          id: "113",
          staff: [
            {
              id: "1",
              avatar: generatorAvatars(),
              name: "佐伯紅葉",
              isLeader: true,
            },
            {
              id: "2",
              avatar: generatorAvatars(),
              name: "沢村正吾",
              isLeader: false,
            },
            {
              id: "3",
              avatar: generatorAvatars(),
              name: "北尾定吉",
              isLeader: false,
            },
            {
              id: "4",
              avatar: generatorAvatars(),
              name: "服部啓司",
              isLeader: false,
            },
            {
              id: "5",
              avatar: generatorAvatars(),
              name: "矢崎謙治",
              isLeader: false,
            },
          ],
        },
      ],
    },
    {
      name: "教育学部",
      id: "120",
      children: [
        {
          name: "教育専攻科",
          id: "121",
          staff: [
            {
              id: "1",
              name: "坂口重吉",
              avatar: generatorAvatars(),
              isLeader: true,
            },
            {
              id: "2",
              name: "鳴海希望",
              avatar: generatorAvatars(),
              isLeader: false,
            },
          ],
        },
      ],
    },
    {
      name: "文学部",
      id: "130",
      staff: [
        {
          id: "1",
          name: "坂口重吉",
          isLeader: true,
          avatar: generatorAvatars(),
        },
        {
          id: "1",
          name: "望月俊之",
          isLeader: false,
          avatar: generatorAvatars(),
        },
        {
          id: "1",
          name: "吉井咲菜",
          isLeader: false,
          avatar: generatorAvatars(),
        },
        {
          id: "1",
          name: "高尾幸一郎",
          isLeader: false,
          avatar: generatorAvatars(),
        },
        {
          id: "1",
          name: "西雅敏",
          isLeader: false,
          avatar: generatorAvatars(),
        },
      ],
      children: [
        {
          name: "日本文学科",
          id: "131",
          staff: [
            {
              id: "2",
              name: "塩谷憲治",
              avatar: generatorAvatars(),
              isLeader: true,
            },
          ],
        },
        {
          name: "英米語文学科",
          id: "132",
          staff: [
            {
              id: "3",
              name: "福島夢",
              avatar: generatorAvatars(),
              isLeader: true,
            },
          ],
        },
      ],
    },
    {
      name: "付属高等学校",
      id: "200",
      staff: [
        {
          id: "3",
          name: "村上重一",
          avatar: generatorAvatars(),
          isLeader: true,
        },
        {
          id: "3",
          name: "平松雪乃",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "3",
          name: "西篤",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "3",
          name: "猪股克己",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "3",
          name: "坂東静男",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "3",
          name: "成田重男",
          avatar: generatorAvatars(),
          isLeader: false,
        },
      ],
    },
    {
      name: "付属中学校",
      id: "300",
      staff: [
        {
          id: "4",
          name: "早川常夫",
          avatar: generatorAvatars(),
          isLeader: true,
        },
        {
          id: "4",
          name: "三谷孝治",
          avatar: generatorAvatars(),
          isLeader: false,
        },
      ],
    },
    {
      name: "付属小学校",
      id: "400",
      staff: [
        {
          id: "4",
          name: "根本十三",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "4",
          name: "沢村正吾",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "4",
          name: "矢部昭一",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "4",
          name: "大山香保",
          avatar: generatorAvatars(),
          isLeader: false,
        },
      ],
    },
    {
      name: "付属幼稚園",
      id: "500",
      staff: [
        {
          id: "5",
          name: "早川常夫",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "5",
          name: "尾上真一",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "5",
          name: "宮里結",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "5",
          name: "斎藤優子",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "5",
          name: "大山香保",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "5",
          name: "福原麻里",
          avatar: generatorAvatars(),
          isLeader: false,
        },
        {
          id: "5",
          name: "原口優那",
          avatar: generatorAvatars(),
          isLeader: false,
        },
      ],
    },
  ],
};
