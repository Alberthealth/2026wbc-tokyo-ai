import React from 'react';
import { Player, PopularPlayer, TeamSection } from '../types';
import { 
  Users, 
  Star, 
  Flag, 
  Info,
  Music
} from 'lucide-react';

export const CHINESE_TAIPEI_PLAYERS: Player[] = [
  // 投手 (16)
  { id: 'p1', name: '沙子宸', position: '投手', team: '運動家體系', nickname: '待補充', handedness: '右投右打' },
  { id: 'p2', name: '林維恩', position: '投手', team: '運動家體系', nickname: '待補充', handedness: '左投左打' },
  { id: 'p3', name: '莊陳仲敖', position: '投手', team: '運動家體系', nickname: '待補充', handedness: '右投右打' },
  { id: 'p4', name: '陳柏毓', position: '投手', team: '匹茲堡海盜體系', nickname: '待補充', handedness: '右投左打' },
  { id: 'p5', name: '林昱珉', position: '投手', team: '亞利桑那響尾蛇體系', nickname: '玉米、左投希望', handedness: '左投左打' },
  { id: 'p6', name: '古林睿煬', position: '投手', team: '北海道日本火腿鬥士', nickname: '金孫', handedness: '右投右打' },
  { id: 'p7', name: '孫易磊', position: '投手', team: '北海道日本火腿鬥士', nickname: '待補充', handedness: '右投左打' },
  { id: 'p8', name: '徐若熙', position: '投手', team: '福岡軟銀鷹', nickname: '龍之子、火球男', handedness: '右投右打' },
  { id: 'p9', name: '張峻瑋', position: '投手', team: '福岡軟銀鷹', nickname: '待補充', handedness: '右投右打' },
  { id: 'p10', name: '陳冠宇', position: '投手', team: '樂天桃猿', nickname: '陳陳', handedness: '左投左打' },
  { id: 'p11', name: '鄭浩均', position: '投手', team: '中信兄弟', nickname: '美美', handedness: '右投右打' },
  { id: 'p12', name: '胡智爲', position: '投手', team: '統一7-ELEVEn獅', nickname: '待補充', handedness: '右投右打' },
  { id: 'p13', name: '林詩翔', position: '投手', team: '台鋼雄鷹', nickname: '待補充', handedness: '右投左打' },
  { id: 'p14', name: '林凱威', position: '投手', team: '味全龍', nickname: '待補充', handedness: '右投右打' },
  { id: 'p15', name: '曾峻岳', position: '投手', team: '富邦悍將', nickname: '待補充', handedness: '右投右打' },
  { id: 'p16', name: '張奕', position: '投手', team: '富邦悍將', nickname: '待補充', handedness: '右投右打' },
  // 捕手 (3)
  { id: 'p17', name: '林家正', position: '捕手', team: '自由球員', nickname: '待補充', handedness: '右投右打' },
  { id: 'p18', name: '吉力吉撈．鞏冠', position: '捕手', team: '味全龍', nickname: '撈哥、怪力男', handedness: '右投右打' },
  { id: 'p19', name: '蔣少宏', position: '捕手', team: '味全龍', nickname: '待補充', handedness: '右投右打' },
  // 內野手 (7)
  { id: 'p20', name: '鄭宗哲', position: '內野手', team: '華盛頓國民指定讓渡', nickname: '小跑車', handedness: '右投左打' },
  { id: 'p21', name: 'Jonathon Long', position: '內野手', team: '芝加哥小熊體系', nickname: '待補充', handedness: '右投右打' },
  { id: 'p22', name: '李灝宇', position: '內野手', team: '底特律老虎體系', nickname: '待補充', handedness: '右投右打' },
  { id: 'p23', name: '江坤宇', position: '內野手', team: '中信兄弟', nickname: '待補充', handedness: '右投右打' },
  { id: 'p24', name: '吳念庭', position: '內野手', team: '台鋼雄鷹', nickname: '待補充', handedness: '右投左打' },
  { id: 'p25', name: '張育成', position: '內野手', team: '富邦悍將', nickname: '國防部長', handedness: '右投右打' },
  { id: 'p26', name: '林子偉', position: '工具人', team: '樂天桃猿', nickname: '待補充', handedness: '右投左打' },
  // 外野手 (4)
  { id: 'p27', name: 'Stuart Fairchild', position: '外野手', team: '克利夫蘭守護者', nickname: '混血外野手', handedness: '右投右打' },
  { id: 'p28', name: '林安可', position: '外野手', team: '埼玉西武獅', nickname: '待補充', handedness: '左投左打' },
  { id: 'p29', name: '陳晨威', position: '外野手', team: '樂天桃猿', nickname: '待補充', handedness: '右投左打' },
  { id: 'p30', name: '陳傑憲', position: '外野手', team: '統一7-ELEVEn獅', nickname: '四爺、隊長', handedness: '右投左打' },
];

export const CHINESE_TAIPEI_POPULAR: PopularPlayer[] = [
  { 
    id: 'pop1', 
    name: '陳傑憲', 
    position: '外野手', 
    team: '統一7-ELEVEn獅',
    nickname: '四爺、隊長、台灣隊靈魂', 
    handedness: '右投左打',
    achievements: '2024 WBSC Premier12 MVP。', 
    chatTopic: '你朋友只要喊「隊長帶路」就不會冷場；打席一站上去全場情緒就像被插上USB充電！(加上逆天顏值，長相神似吳奇隆！)' 
  },
  { 
    id: 'pop2', 
    name: '張育成', 
    position: '內野手', 
    team: '富邦悍將',
    nickname: '國防部長、WBC男主角', 
    handedness: '右投右打',
    achievements: '2023 WBC Pool A MVP。', 
    chatTopic: '「一到國際賽就像開外掛」：經典賽的張育成你一定看過！只要他上場，全台灣球迷都會自動敬禮！' 
  },
  { 
    id: 'pop3', 
    name: '鄭宗哲', 
    position: '內野手', 
    team: '華盛頓國民指定讓渡',
    nickname: '小跑車', 
    handedness: '右投左打',
    achievements: '2025唯一在MLB出賽的台灣打者。', 
    chatTopic: '典型「看起來瘦、跑起來狠」：一上壘你朋友就會開始賭他會不會盜！' 
  },
  { 
    id: 'pop4', 
    name: '林昱珉', 
    position: '投手', 
    team: '亞利桑那響尾蛇體系',
    nickname: '玉米、左投希望', 
    handedness: '左投左打',
    achievements: '受邀MLB春訓，國際賽投手看點。', 
    chatTopic: '可以用一句話裝懂：「左投在大賽超吃香」！手臂滿滿刺青的霸氣模樣超殺。' 
  },
  { 
    id: 'pop5', 
    name: '徐若熙', 
    position: '投手', 
    team: '福岡軟銀鷹',
    nickname: '龍之子、火球男', 
    handedness: '右投右打',
    achievements: '近年CPBL最強本土投手之一。', 
    chatTopic: '朋友問他強在哪：回「球一出手，捕手手套會痛那種」就對了！' 
  },
  { 
    id: 'pop6', 
    name: '費爾柴德', 
    position: '外野手', 
    team: '克利夫蘭守護者',
    nickname: '混血外野手', 
    handedness: '右投右打',
    achievements: '具MLB資歷、首度為台灣出賽。', 
    chatTopic: '「這名字很像漫威角色」；一日球迷最好用的梗：「今天就靠費仔飛一下」！' 
  },
  { 
    id: 'pop7', 
    name: '吉力吉撈．鞏冠', 
    position: '捕手', 
    team: '味全龍',
    nickname: '撈哥、怪力男', 
    handedness: '右投右打',
    achievements: '中職全壘打王，擁有極具威脅性的爆發力。', 
    chatTopic: '名字常常被國外的外語播報員唸到崩潰！開轟後那狂野的甩棒動作絕對是亮點。' 
  },
];

export const JAPAN_PLAYERS: Player[] = [
  // 投手 (14)
  { id: 'jp1', name: '松井 裕樹', reading: 'まつい ゆうき', position: '投手', team: '聖地牙哥教士', nickname: '左殺守護神', handedness: '左投左打' },
  { id: 'jp2', name: '宮城 大弥', reading: 'みやぎ ひろや', position: '投手', team: '歐力士猛牛', nickname: '待補充', handedness: '左投左打' },
  { id: 'jp3', name: '伊藤 大海', reading: 'いとう ひろみ', position: '投手', team: '北海道日本火腿鬥士', nickname: '待補充', handedness: '右投左打' },
  { id: 'jp4', name: '大勢', reading: 'たいせい', position: '投手', team: '讀賣巨人', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp5', name: '菊池 雄星', reading: 'きくち ゆうせい', position: '投手', team: '洛杉磯天使', nickname: '待補充', handedness: '左投左打' },
  { id: 'jp6', name: '山本 由伸', reading: 'やまもと よしのぶ', position: '投手', team: '洛杉磯道奇', nickname: '由伸、王牌', handedness: '右投右打' },
  { id: 'jp7', name: '菅野 智之', reading: 'すがの ともゆき', position: '投手', team: '科羅拉多洛磯', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp8', name: '隅田 知一郎', reading: 'すみだ ちひろ', position: '投手', team: '埼玉西武獅', nickname: '待補充', handedness: '左投左打' },
  { id: 'jp9', name: '種市 篤暉', reading: 'たねいち あつき', position: '投手', team: '千葉羅德海洋', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp10', name: '髙橋 宏斗', reading: 'たかはし ひろと', position: '投手', team: '中日龍', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp11', name: '藤平 尚真', reading: 'ふじひら しょうま', position: '投手', team: '東北樂天金鷲', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp12', name: '曽谷 龍平', reading: 'そたに りゅうへい', position: '投手', team: '歐力士猛牛', nickname: '待補充', handedness: '左投左打' },
  { id: 'jp13', name: '北山 亘基', reading: 'きたやま こうき', position: '投手', team: '北海道日本火腿鬥士', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp14', name: '松本 裕樹', reading: 'まつもと ゆうき', position: '投手', team: '福岡軟銀鷹', nickname: '待補充', handedness: '右投左打' },
  // 捕手 (3)
  { id: 'jp15', name: '若月 健矢', reading: 'わかつき けんや', position: '捕手', team: '歐力士猛牛', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp16', name: '坂本 誠志郎', reading: 'さかもと せいしろう', position: '捕手', team: '阪神虎', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp17', name: '中村 悠平', reading: 'なかむら ゆうへい', position: '捕手', team: '東京養樂多燕子', nickname: '待補充', handedness: '右投右打' },
  // 內野手 (7)
  { id: 'jp18', name: '牧 秀悟', reading: 'まき しゅうご', position: '內野手', team: '橫濱DeNA海灣之星', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp19', name: '小園 海斗', reading: 'こぞの かいと', position: '內野手', team: '廣島東洋鯉魚', nickname: '待補充', handedness: '右投左打' },
  { id: 'jp20', name: '牧原 大成', reading: 'まきはら たいせい', position: '內野手', team: '福岡軟銀鷹', nickname: '待補充', handedness: '右投左打' },
  { id: 'jp21', name: '源田 壯亮', reading: 'げんだ そうすけ', position: '內野手', team: '埼玉西武獅', nickname: '待補充', handedness: '右投左打' },
  { id: 'jp22', name: '佐藤 輝明', reading: 'さとう てるあき', position: '內野手', team: '阪神虎', nickname: '待補充', handedness: '右投左打' },
  { id: 'jp23', name: '岡本 和真', reading: 'おかもと かずま', position: '內野手', team: '多倫多藍鳥', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp24', name: '村上 宗隆', reading: 'むらかみ むねたか', position: '內野手', team: '芝加哥白襪', nickname: '村神様', handedness: '右投左打' },
  // 外野手 (5)
  { id: 'jp25', name: '近藤 健介', reading: 'こん行動 けんすけ', position: '外野手', team: '福岡軟銀鷹', nickname: '待補充', handedness: '右投左打' },
  { id: 'jp26', name: '周東 佑京', reading: 'しゅうとう うきょう', position: '外野手', team: '福岡軟銀鷹', nickname: '待補充', handedness: '右投左打' },
  { id: 'jp27', name: '森下 翔太', reading: 'もりした しょうた', position: '外野手', team: '阪神虎', nickname: '待補充', handedness: '右投右打' },
  { id: 'jp28', name: '吉田 正尚', reading: 'よしだ まさたか', position: '外野手', team: '波士頓紅襪', nickname: 'マッチョ、打點王', handedness: '右投左打' },
  { id: 'jp29', name: '鈴木 誠也', reading: 'すずき せいや', position: '外野手', team: '芝加哥小熊', nickname: '誠也', handedness: '右投右打' },
  // 指名打者 (1)
  { id: 'jp30', name: '大谷 翔平', reading: 'おおたに しょうへい', position: '指定打擊', team: '洛杉磯道奇', nickname: '二刀流、Showtime、外星人', handedness: '右投左打' },
];

export const KOREA_PLAYERS: Player[] = [
  // 投手
  { id: 'kr1', name: '德寧', reading: 'デーン・ダニング', originalName: '데인 더닝', position: '投手', team: '西雅圖水手', nickname: '美職強援', handedness: '右投右打' },
  { id: 'kr2', name: '高祐錫', reading: 'コ・ウソク', originalName: '고우석', position: '投手', team: '底特律老虎體系', nickname: '火球救援', handedness: '右投右打' },
  { id: 'kr3', name: '孫周永', reading: 'ソン・ジュヨン', originalName: '손주영', position: '投手', team: 'LG雙子', nickname: '待補充', handedness: '左投左打' },
  { id: 'kr4', name: '宋勝基', reading: 'ソン・スンギ', originalName: '송승기', position: '投手', team: 'LG雙子', nickname: '待補充', handedness: '左投左打' },
  { id: 'kr5', name: '柳賢振', reading: 'リュ・ヒョンジン', originalName: '류현진', position: '投手', team: '韓華鷹', nickname: '怪物投手', handedness: '左投右打' },
  { id: 'kr6', name: '鄭宇宙', reading: 'チョン・ウジュ', originalName: '정우주', position: '投手', team: '韓華鷹', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr7', name: '趙丙炫', reading: 'チョ・ビョンヒョン', originalName: '조병현', position: '投手', team: 'SSG登錄者', nickname: '待補充', handedness: '右投左打' },
  { id: 'kr8', name: '盧景銀', reading: 'ノ・ギョンウン', originalName: '노경은', position: '投手', team: 'SSG登錄者', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr9', name: '金榮奎', reading: 'キム・ヨンギュ', originalName: '김영규', position: '投手', team: 'NC恐龍', nickname: '待補充', handedness: '左投左打' },
  { id: 'kr10', name: '蘇珩準', reading: 'ソ・ヒョンジュン', originalName: '소형준', position: '投手', team: 'KT巫師', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr11', name: '高永表', reading: 'コ・ヨンピョ', originalName: '고영표', position: '投手', team: 'KT巫師', nickname: '待補充', handedness: '右側投右打' },
  { id: 'kr12', name: '朴英賢', reading: 'パク・ヨンヒョン', originalName: '박영현', position: '投手', team: 'KT巫師', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr13', name: '郭彬', reading: 'クァク・ピン', originalName: '곽빈', position: '投手', team: '斗山熊', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr14', name: '劉泳澯', reading: 'ユ・ヨンチャン', originalName: '유영찬', position: '投手', team: 'LG雙子', nickname: '待補充', handedness: '右投左打' },
  { id: 'kr15', name: '金澤延', reading: 'キム・テクヨン', originalName: '김택연', position: '投手', team: '斗山熊', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr16', name: '元泰仁', reading: 'ウォン・テイン', originalName: '원태인', position: '投手', team: '三星獅', nickname: '控球派王牌', handedness: '右投右打' },
  // 捕手
  { id: 'kr17', name: '朴東原', reading: 'パク・トンウォン', originalName: '박동원', position: '捕手', team: 'LG雙子', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr18', name: '金亨俊', reading: 'キム・ヒョンジュン', originalName: '김형준', position: '捕手', team: 'NC恐龍', nickname: '待補充', handedness: '右投右打' },
  // 內野手
  { id: 'kr19', name: 'Shay Whitcomb', reading: 'シェイ・ウィットコム', originalName: '셰이 惠特科姆', position: '內野手', team: '休士頓太空人', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr20', name: '金慧成', reading: 'キム・ヘソン', originalName: '김혜성', position: '內野手', team: '洛杉磯道奇', nickname: '待補充', handedness: '右投左打' },
  { id: 'kr21', name: '文保景', reading: 'ムン・ボギョン', originalName: '문보경', position: '內野手', team: 'LG雙子', nickname: '待補充', handedness: '右投左打' },
  { id: 'kr22', name: '申珉宰', reading: 'シン・ミンジェ', originalName: '신민재', position: '內野手', team: 'LG雙子', nickname: '待補充', handedness: '右投左打' },
  { id: 'kr23', name: '金周元', reading: 'キム・ジュウォン', originalName: '김주원', position: '內野手', team: 'NC恐龍', nickname: '待補充', handedness: '右投雙打' },
  { id: 'kr24', name: '金倒永', reading: 'キム・ドヨン', originalName: '김도영', position: '內野手', team: 'KIA虎', nickname: '韓國大谷、怪物大物', handedness: '右投右打' },
  { id: 'kr25', name: '盧施煥', reading: 'ノ・シファン', originalName: '노시환', position: '內野手', team: '韓華鷹', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr26', name: '金河成', reading: 'キム・ハソン', originalName: '김하성', position: '內野手', team: '聖地牙哥教士', nickname: '守備教科書', handedness: '右投右打' },
  // 外野手
  { id: 'kr27', name: '李政厚', reading: 'イ・ジョンフ', originalName: '이정후', position: '外野手', team: '舊金山巨人', nickname: '風之孫', handedness: '右投左打' },
  { id: 'kr28', name: 'Jahmai Jones', reading: 'ジャマイ・ジョーンズ', originalName: '자迈 瓊斯', position: '外野手', team: '底特律老虎', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr29', name: '朴海旻', reading: 'パク・ヘミン', originalName: '박해민', position: '外野手', team: 'LG雙子', nickname: '待補充', handedness: '右投左打' },
  { id: 'kr30', name: '具滋昱', reading: 'ク・ジャウク', originalName: '구자욱', position: '外野手', team: '三星獅', nickname: 'KBO強打', handedness: '右投左打' },
  { id: 'kr31', name: '安賢民', reading: 'アン・ヒョンミン', originalName: '안현민', position: '外野手', team: 'KT巫師', nickname: '待補充', handedness: '右投右打' },
  { id: 'kr32', name: '文賢彬', reading: 'ムン・ヒョンビン', originalName: '문현빈', position: '外野手', team: '韓華鷹', nickname: '待補充', handedness: '右投左打' },
  // 預備登錄投手
  { id: 'kr33', name: '裴燦勝', reading: 'ペ・チャンスン', originalName: '배찬승', position: '預備投手', team: '三星獅', nickname: '待補充', handedness: '左投左打' },
  { id: 'kr34', name: '文東珠', reading: 'ムン・ドンジュ', originalName: '문동주', position: '預備投手', team: '韓華鷹', nickname: '待補充', handedness: '右投右打' },
];

export const KOREA_POPULAR: PopularPlayer[] = [
  { 
    id: 'kr_pop1', 
    name: '柳賢振', 
    originalName: '류현진',
    position: '投手', 
    team: '韓華鷹',
    nickname: '「怪物投手」', 
    handedness: '左投右打',
    achievements: '領軍韓國隊為焦點 。曾奪得大聯盟防禦率王，現回歸 KBO 韓華鷹的傳奇老將。', 
    chatTopic: '聊天梗：「怪物回來了」(講完你朋友會自動接「那今天誰是勇者？」) 身材微胖，但控球跟魔術一樣神準。這次強勢回歸國家隊擔任精神領袖，球迷真的是「看一次少一次」。' 
  },
  { 
    id: 'kr_pop2', 
    name: '李政厚', 
    originalName: '이정후',
    position: '外野手', 
    team: '舊金山巨人',
    nickname: '「風之孫」', 
    handedness: '右投左打',
    achievements: '旅美經驗核心之一 。', 
    chatTopic: '一日球迷版：跑壘像開風扇，「你只看到背號，人已經到二壘」 ！' 
  },
  { 
    id: 'kr_pop3', 
    name: '金河成', 
    originalName: '김하성',
    position: '內野手', 
    team: '聖地牙哥教士',
    nickname: '「守備教科書」', 
    handedness: '右投右打',
    achievements: '韓國隊常年內野核心型球員 。', 
    chatTopic: '梗：失誤很少所以你可以說「他手套像磁鐵」 ！' 
  },
  { 
    id: 'kr_pop4', 
    name: '高祐錫', 
    originalName: '고우석',
    position: '投手', 
    team: '底特律老虎體系',
    nickname: '「火球救援」', 
    handedness: '右投右打',
    achievements: 'MLB 官方整理提到其名列韓國隊名單 。', 
    chatTopic: '一日球迷版：「看到他熱身你就先把心跳調小聲」 ！' 
  },
  { 
    id: 'kr_pop5', 
    name: '元泰仁', 
    originalName: '원태인',
    position: '投手', 
    team: '三星獅',
    nickname: '「控球派王牌」', 
    handedness: '右投右打',
    achievements: '分析文點名為輪值看點 。', 
    chatTopic: '梗：不是暴力派，但很折磨——「像用小火慢燉打者」 ！' 
  },
  { 
    id: 'kr_pop6', 
    name: '具滋昱', 
    originalName: '구자욱',
    position: '外野手', 
    team: '三星獅',
    nickname: '「KBO強打」', 
    handedness: '右投左打',
    achievements: '常見外野強打 。', 
    chatTopic: '一日球迷版：「長打一來，韓國應援會直接開到最大聲」 ！' 
  },
  { 
    id: 'kr_pop7', 
    name: '金倒永', 
    originalName: '김도영',
    position: '內野手', 
    team: 'KIA虎',
    nickname: '韓國大谷、怪物大物', 
    handedness: '右投右打',
    achievements: '2024 年 KBO 最年輕「30轟30盜」、年度 MVP。', 
    chatTopic: '韓國目前最紅的超級大物！才剛滿 22 歲就展現恐怖火力。長得帥又會打，絕對是這次中華隊投手群最頭痛的敵人。' 
  },
  { 
    id: 'kr_pop8', 
    name: '德寧 (Dane Dunning)', 
    originalName: '데인 더닝',
    position: '投手', 
    team: '西雅圖水手',
    nickname: '美職強援', 
    handedness: '右投右打',
    achievements: '現役美職水手 3A、擁有韓裔美籍大聯盟資歷。', 
    chatTopic: '韓國隊這次為了突破預賽大膽徵召的「外掛級」混血助拳人，話題性拉滿。' 
  },
];

export const CHEERLEADERS: Player[] = [
  // 中信兄弟 Passion Sisters
  { id: 'ch1', name: '峮峮', position: '啦啦隊', team: '中信兄弟 Passion Sisters', nickname: 'CT AMAZE 隊長、日本也高知名度；背號 77', handedness: 'IG: qun_04' },
  { id: 'ch2', name: '短今', position: '啦啦隊', team: '中信兄弟 Passion Sisters', nickname: '舞台氣場強、曾任隊長；自費先訂東京機票', handedness: 'IG: sammie_923' },
  { id: 'ch3', name: '妮可', position: '啦啦隊', team: '中信兄弟 Passion Sisters', nickname: 'Passion Sisters 隊長；被形容「勝利女神」', handedness: 'IG: nicole840629' },
  { id: 'ch4', name: '夏蕾', position: '啦啦隊', team: '中信兄弟 Passion Sisters', nickname: '前女團成員，偶像唱跳底子＋轉型故事', handedness: 'IG: abbey_0210' },
  { id: 'ch5', name: '衣宸', position: '啦啦隊', team: '中信兄弟 Passion Sisters', nickname: '伊林模特兒背景，擅長舞蹈/畫畫/彈鋼琴', handedness: 'IG: yichen_0107' },
  { id: 'ch6', name: '少鹽', position: '啦啦隊', team: '中信兄弟 Passion Sisters', nickname: '個性古靈精怪、舞蹈＋美術專長', handedness: 'IG: shaoyen_0209' },
  // 味全龍 Dragon Beauties
  { id: 'ch7', name: '林襄', position: '啦啦隊', team: '味全龍 Dragon Beauties', nickname: '「流量密碼」代表，個人品牌影響力強', handedness: 'IG: 95_mizuki' },
  { id: 'ch8', name: '小映', position: '啦啦隊', team: '味全龍 Dragon Beauties', nickname: '小龍女隊長/發言人；空服員儀態', handedness: 'IG: jing_0107' },
  { id: 'ch9', name: '沛沛', position: '啦啦隊', team: '味全龍 Dragon Beauties', nickname: '高難度空中環特技＋棒籃雙棲應援', handedness: 'IG: peipei_0105' },
  { id: 'ch10', name: '菲菲', position: '啦啦隊', team: '味全龍 Dragon Beauties', nickname: '廣告/MV 經驗多，被粉絲稱長腿/回眸女神', handedness: 'IG: aviva_1028' },
  { id: 'ch11', name: '蘿拉', position: '啦啦隊', team: '味全龍 Dragon Beauties', nickname: 'Breaking 舞者＋「戰鬥陀螺」反差宅系', handedness: 'IG: lola_0825' },
  { id: 'ch12', name: '璦昀', position: '啦啦隊', team: '味全龍 Dragon Beauties', nickname: '舞蹈爆發力強、帶動氣氛核心；「甜美教主」', handedness: 'IG: yun_0422' },
  // 統一獅 Uni-Girls
  { id: 'ch13', name: 'Yuki', position: '啦啦隊', team: '統一獅 Uni-Girls', nickname: '隊長；喜歡打遊戲/畫畫（「宅＋才藝」）', handedness: 'IG: yukiii_min' },
  { id: 'ch14', name: 'Maggie', position: '啦啦隊', team: '統一獅 Uni-Girls', nickname: '喜歡抹茶/雞蛋糕（可做美食梗）', handedness: 'IG: _maggie_chen' },
  { id: 'ch15', name: '一七', position: '啦啦隊', team: '統一獅 Uni-Girls', nickname: 'MBTI ENTP；喜歡吃美食/擼狗', handedness: 'IG: hi54017' },
  { id: 'ch16', name: '瑟七', position: '啦啦隊', team: '統一獅 Uni-Girls', nickname: '喜歡追星/睡覺（社群語感很強）', handedness: 'IG: __seul777' },
  { id: 'ch17', name: '侯芳', position: '啦啦隊', team: '統一獅 Uni-Girls', nickname: '愛追劇/聽音樂、愛吃螺獅粉', handedness: 'IG: 5.59h' },
  { id: 'ch18', name: '芮絲', position: '啦啦隊', team: '統一獅 Uni-Girls', nickname: '喜歡空環/花藝＋甜食控', handedness: 'IG: han.yang830' },
  // 富邦悍將 Fubon Angels
  { id: 'ch19', name: '秀秀子', position: '啦啦隊', team: '富邦悍將 Fubon Angels', nickname: '隊長；喜歡漫畫/電玩/攝影/畫畫', handedness: 'IG: showshowz1124' },
  { id: 'ch20', name: '丹丹', position: '啦啦隊', team: '富邦悍將 Fubon Angels', nickname: '「沙發馬鈴薯」＋旅遊愛小動物反差萌', handedness: 'IG: yea_wu' },
  { id: 'ch21', name: '安娜', position: '啦啦隊', team: '富邦悍將 Fubon Angels', nickname: '喜歡自由潛水/空環（運動系辨識度）', handedness: 'IG: anna0205chen_' },
  { id: 'ch22', name: '卡洛琳', position: '啦啦隊', team: '富邦悍將 Fubon Angels', nickname: '喜歡撸貓/看劇/躺床一整天', handedness: 'IG: carolynnnnn28' },
  { id: 'ch23', name: 'Jessy', position: '啦啦隊', team: '富邦悍將 Fubon Angels', nickname: '喜歡跳舞/唱歌/學韓文/學美甲', handedness: 'IG: jessy04260426' },
  { id: 'ch24', name: '潔潔', position: '啦啦隊', team: '富邦悍將 Fubon Angels', nickname: '喜歡唱歌跳舞看書學習；甜點百科', handedness: 'IG: chieh__j' },
  // 樂天桃猿 Rakuten Girls
  { id: 'ch25', name: '卉妮', position: '啦啦隊', team: '樂天桃猿 Rakuten Girls', nickname: '專長體操/舞蹈', handedness: 'IG: ninidaniel' },
  { id: 'ch26', name: '孟潔', position: '啦啦隊', team: '樂天桃猿 Rakuten Girls', nickname: '專長跳舞/唱歌', handedness: 'IG: mengj215' },
  { id: 'ch27', name: '熊霓', position: '啦啦隊', team: '樂天桃猿 Rakuten Girls', nickname: '會跳舞也會打鼓', handedness: 'IG: michelle02_14' },
  { id: 'ch28', name: '岱縈', position: '啦啦隊', team: '樂天桃猿 Rakuten Girls', nickname: '暱稱「小鹿」＋超愛貓/冰', handedness: 'IG: daiying0' },
  { id: 'ch29', name: '彭彭', position: '啦啦隊', team: '樂天桃猿 Rakuten Girls', nickname: '桌球/扯鈴/直排輪（才藝很具象）', handedness: 'IG: ujou.chi' },
  { id: 'ch30', name: '貝佳頤', position: '啦啦隊', team: '樂天桃猿 Rakuten Girls', nickname: '專長保養＋有個人 YouTube', handedness: 'IG: llxyblair' },
  // 台鋼雄鷹 Wing Stars
  { id: 'ch31', name: '螢螢', position: '啦啦隊', team: '台鋼雄鷹 Wing Stars', nickname: '隊長；從小學舞、活力型', handedness: 'IG: wingstars_official' },
  { id: 'ch32', name: '一粒', position: '啦啦隊', team: '台鋼雄鷹 Wing Stars', nickname: '冰山系美女其實悶騷；葉保弟應援爆紅', handedness: 'IG: wingstars_official' },
  { id: 'ch33', name: '李樂', position: '啦啦隊', team: '台鋼雄鷹 Wing Stars', nickname: '愛表演跳舞、也愛追劇看漫畫', handedness: 'IG: wingstars_official' },
  { id: 'ch34', name: '恬魚', position: '啦啦隊', team: '台鋼雄鷹 Wing Stars', nickname: '隊內年紀最小；背號 5 是生日日期', handedness: 'IG: wingstars_official' },
  { id: 'ch35', name: '妡 0', position: '啦啦隊', team: '台鋼雄鷹 Wing Stars', nickname: '19 歲接觸啦啦隊、創隊成員', handedness: 'IG: wingstars_official' },
  { id: 'ch36', name: '林浠', position: '啦啦隊', team: '台鋼雄鷹 Wing Stars', nickname: '阿美＋客家混血；熱情＋古怪', handedness: 'IG: wingstars_official' },
];

export const CHEER_POPULAR: PopularPlayer[] = [
  { 
    id: 'ch_pop1', 
    name: '林襄', 
    position: '話題王牌', 
    team: '味全龍 Dragon Beauties',
    nickname: '流量密碼', 
    handedness: 'IG: 95_mizuki',
    achievements: '日本媒體也常點名的「話題王牌」 ！', 
    chatTopic: '聊天必備：「她一出場，連不看球的都開始問：這場是棒球還是演唱會？」' 
  },
  { 
    id: 'ch_pop2', 
    name: '峮峮', 
    position: '啦啦隊天花板', 
    team: '中信兄弟 Passion Sisters',
    nickname: '抗日女神', 
    handedness: 'IG: qun_04',
    achievements: '日本報導點名超高人氣 ！(註：日媒音譯或資料中曾被提及為啫啫)', 
    chatTopic: '「你朋友只要說『我認識她！』你就回：『對，全亞洲都認識。』」 招牌「炸裂舞」早就紅遍全球啦！' 
  },
  { 
    id: 'ch_pop3', 
    name: '短今', 
    position: '高挑女神', 
    team: '中信兄弟 Passion Sisters',
    nickname: '把應援當使命', 
    handedness: 'IG: sammie_923',
    achievements: '日媒報導提到 IG 追蹤與來日話題 。', 
    chatTopic: '經典聊天法：先聊她的「東京夜景照」，再自然帶到「所以我們也要去東京巨蛋啊」 ！' 
  },
  { 
    id: 'ch_pop4', 
    name: '一粒', 
    position: '現象級流量', 
    team: '台鋼雄鷹 Wing Stars',
    nickname: '在地一粒', 
    handedness: 'IG: wingstars_official',
    achievements: '靠著魔性「葉保弟應援曲」搭配超仙氣外表瞬間爆紅。', 
    chatTopic: '讓全台無數球迷暈船，絕對是世界體驗「粒即中毒」的最強代表。' 
  },
  { 
    id: 'ch_pop5', 
    name: '瑟七', 
    position: '南霸天最婆', 
    team: '統一獅 Uni-Girls',
    nickname: '亞冠賽紅人', 
    handedness: 'IG: __seul777',
    achievements: '在上一次的亞冠賽中直接煞到日本球迷，衝上日本推特熱搜榜！', 
    chatTopic: '被公認是最懂抓日本人心的女神之一。' 
  },
];

export const JAPAN_POPULAR: PopularPlayer[] = [
  { 
    id: 'jp_pop1', 
    name: '大谷 翔平', 
    position: '指定打擊', 
    team: '洛杉磯道奇',
    nickname: '「二刀流」「Showtime」、外星人', 
    handedness: '右投左打',
    achievements: 'WBC冠軍核心：已公開將以打者為主出賽 。(更達成MLB史無前例「50轟50盜」！) 2025 年帶領道奇奪冠、三屆 MVP。', 
    chatTopic: '這次只打不投（指定打擊）。朋友不懂棒球也懂他：直接丟一句「他是棒球界開掛的那個」 ！' 
  },
  { 
    id: 'jp_pop2', 
    name: '山本 由伸', 
    position: '投手', 
    team: '洛杉磯道奇',
    nickname: '「由伸」「王牌」', 
    handedness: '右投右打',
    achievements: '領銜日本隊輪值；近年頂級先發 。2025 年 MLB 世界大賽 MVP、日職澤村賞三連霸。', 
    chatTopic: '道奇隊的大谷好隊友！投球動作超特別（不需要高抬腿）就能飆出 158 公里火球，「他投球像在放 ASMR」：球迷會說很舒服，但打者會睡不著 ！' 
  },
  { 
    id: 'jp_pop3', 
    name: '村上 宗隆', 
    position: '內野手', 
    team: '芝加哥白襪',
    nickname: '「村神様」', 
    handedness: '右投左打',
    achievements: '日本隊強打核心之一 。日職單季 56 轟本土紀錄保持人，現已轉戰 MLB 芝加哥白襪隊。', 
    chatTopic: '一日球迷必背：「村神一發，聊天室會炸」 ！上一屆 WBC 四強賽揮出再見安打救了日本隊！' 
  },
  { 
    id: 'jp_pop4', 
    name: '鈴木 誠也', 
    position: '外野手', 
    team: '芝加哥小熊',
    nickname: '「誠也」', 
    handedness: '右投右打',
    achievements: 'MLB 強打之一 。', 
    chatTopic: '你可以開玩笑：「這位是把外野當客廳在跑的」 ！' 
  },
  { 
    id: 'jp_pop5', 
    name: '吉田 正尚', 
    position: '外野手', 
    team: '波士頓紅襪',
    nickname: '「マッチョ」「打點王梗」', 
    handedness: '右投左打',
    achievements: '2023 WBC曾創打點話題 。', 
    chatTopic: '朋友只要看到他：你就說「這位看起來像上班族，打起來像怪物」 ！' 
  },
  { 
    id: 'jp_pop6', 
    name: '松井 裕樹', 
    position: '投手', 
    team: '聖地牙哥教士',
    nickname: '「左殺守護神」', 
    handedness: '左投左打',
    achievements: '投手群重點(旅美左投) 。', 
    chatTopic: '一日球迷理解版：「他上來就是『關門』，不要眨眼」 ！' 
  },
];

export const SECTIONS: TeamSection[] = [
  {
    id: 'tpe',
    name: '中華隊 (Chinese Taipei)',
    flag: 'https://picsum.photos/seed/tpe-flag/800/600',
    color: 'from-blue-700 to-red-600',
    players: CHINESE_TAIPEI_PLAYERS,
    popularPlayers: CHINESE_TAIPEI_POPULAR
  },
  {
    id: 'jpn',
    name: '日本隊 (Samurai Japan)',
    flag: 'https://picsum.photos/seed/jpn-flag/800/600',
    color: 'from-zinc-800 to-zinc-600',
    players: JAPAN_PLAYERS,
    popularPlayers: JAPAN_POPULAR
  },
  {
    id: 'kor',
    name: '韓國隊 (Korea)',
    flag: 'https://picsum.photos/seed/kor-flag/800/600',
    color: 'from-blue-600 to-red-500',
    players: KOREA_PLAYERS,
    popularPlayers: KOREA_POPULAR
  },
  {
    id: 'cheer',
    name: '台灣應援啦啦隊',
    flag: 'https://picsum.photos/seed/cheer-flag/800/600',
    color: 'from-pink-500 to-rose-400',
    players: CHEERLEADERS,
    popularPlayers: CHEER_POPULAR
  }
];
