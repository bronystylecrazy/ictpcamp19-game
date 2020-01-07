import {
   BaseItem
} from './itemManager';

const case1_joke = [
   'ไม่มีอะไรได้มาโดยที่ไม่ต้องลงทุน',
   'อย่ามัวแต่มองหาสิ่งที่ขาด เดี๋ยวจะพลาดสิ่งที่มี',
   'ท้องฟ้ายังไม่เหมือนกันสักวัน ชีวิตเราก็เช่นกัน',
   'อย่าไปคาดหวังกับใครมาก ไม่มีใครเป็นคนเดิมได้ตลอดไปหรอก',
   'ข้อดีของการไม่ได้ครอบครอง คือไม่มีวันสูญเสียสิ่งนั้นไป',
   'ฉันไม่ได้ต้องการชีวิตที่สมบูรณ์แบบ<br>ฉันต้องการชีวิตที่มีความสุข',
   'อยู่กับโลกของเราที่ยังมีเขา ดีกว่าโลกของเขาที่ไม่มีเราเลย',
   'คนเราไม่อาจแก้ไขอดีต ที่ทำได้ เพียงแค่เรียนรู้จากมัน',
   'กอดคือเสื้อที่ไม่มีไซซ์ แค่สวมใส่ก็อบอุ่น',
   'รูปโปรไฟล์คือมายา เพื่อนแท็กมาคือของจริง'
];

var case1 = {
   id: 0,
   name: '<b>ถุงขนมพญานาคราช</b>',
   description: 'อร่อยๆ นะคร้าบบ',
   icon: 'images/cases/case1.png',
   type: 'ห่อขนม',
   blue: [
      // new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 1 เม็ด', 'candy/heart1.png', case1_joke),
      // new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 2 เม็ด', 'candy/heart1.png', case1_joke),
      //new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 3 เม็ด', 'candy/heart1.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 4 เม็ด', 'candy/heart1.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 5 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   purple: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 6 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   pink: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 7 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   red: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 8 เม็ด', 'candy/heart1.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 9 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   gold: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 10 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   bgColor: '#80CBC4'
};

var case2 = {
   id: 1,
   name: '<b>ถุงขนมครุฑา</b>',
   description: 'อร่อยๆ นะคร้าบบ',
   icon: 'images/cases/case2.png',
   type: 'กล่อง',
   blue: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 1 เม็ด', 'candy/heart2.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 2 เม็ด', 'candy/heart2.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 3 เม็ด', 'candy/heart2.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 4 เม็ด', 'candy/heart2.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 5 เม็ด', 'candy/heart2.png', case1_joke),
   ],
   purple: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 6 เม็ด', 'candy/heart2.png', case1_joke),
   ],
   pink: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 7 เม็ด', 'candy/heart2.png', case1_joke),
   ],
   red: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 8 เม็ด', 'candy/heart2.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 9 เม็ด', 'candy/heart2.png', case1_joke),
   ],
   gold: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 10 เม็ด', 'candy/heart2.png', case1_joke),
   ],
   bgColor: '#EF9A9A'
};

var case3 = {
   id: 2,
   name: '<b>ถุงขนมมยุรเวนไตย</b>',
   description: 'อร่อยๆ นะคร้าบบ',
   icon: 'images/cases/case3.png',
   type: 'กล่อง',
   blue: [
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 1 เม็ด', 'candy/chewy.png', case1_joke),
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 2 เม็ด', 'candy/chewy.png', case1_joke),
   ],
   purple: [
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 3 เม็ด', 'candy/chewy.png', case1_joke),
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 4 เม็ด', 'candy/chewy.png', case1_joke),
   ],
   pink: [
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 5 เม็ด', 'candy/chewy.png', case1_joke),
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 6 เม็ด', 'candy/chewy.png', case1_joke),
   ],
   red: [
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 7 เม็ด', 'candy/chewy.png', case1_joke),
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 8 เม็ด', 'candy/chewy.png', case1_joke),
   ],
   gold: [
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 9 เม็ด', 'candy/chewy.png', case1_joke),
      new BaseItem('ลูกอม', 'เคี้ยวหนึบ STBR | ทั้งหมด 10 เม็ด', 'candy/chewy.png', case1_joke),
   ],
   bgColor: '#90CAF9'
};



var case4 = {
   id: 3,
   name: '<b>ถุงขนมบัณฑุราชสีห์</b>',
   description: 'อร่อยๆ นะคร้าบบ',
   icon: 'images/cases/case4.png',
   type: 'กล่อง',
   blue: [
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 1 เม็ด', 'candy/kopiko.png', case1_joke),
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 2 เม็ด', 'candy/kopiko.png', case1_joke),
   ],
   purple: [
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 3 เม็ด', 'candy/kopiko.png', case1_joke),
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 4 เม็ด', 'candy/kopiko.png', case1_joke),
   ],
   pink: [
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 5 เม็ด', 'candy/kopiko.png', case1_joke),
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 6 เม็ด', 'candy/kopiko.png', case1_joke),
   ],
   red: [
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 7 เม็ด', 'candy/kopiko.png', case1_joke),
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 8 เม็ด', 'candy/kopiko.png', case1_joke),
   ],
   gold: [
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 9 เม็ด', 'candy/kopiko.png', case1_joke),
      new BaseItem('ลูกอม', 'โกบิกโก้ | ทั้งหมด 10 เม็ด', 'candy/kopiko.png', case1_joke),
   ],
   bgColor: '#FFF59D'
};

var case5 = {
   id: 4,
   name: '<b>ถุงขนมกิเลน</b>',
   description: 'อร่อยๆ นะคร้าบบ',
   icon: 'images/cases/case5.png',
   type: 'กล่อง',
   blue: [
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 1 เม็ด', 'candy/lush.png', case1_joke),
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 2 เม็ด', 'candy/lush.png', case1_joke),
   ],
   purple: [
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 3 เม็ด', 'candy/lush.png', case1_joke),
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 4 เม็ด', 'candy/lush.png', case1_joke),
   ],
   pink: [
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 5 เม็ด', 'candy/lush.png', case1_joke),
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 6 เม็ด', 'candy/lush.png', case1_joke),
   ],
   red: [
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 7 เม็ด', 'candy/lush.png', case1_joke),
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 8 เม็ด', 'candy/lush.png', case1_joke),
   ],
   gold: [
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 9 เม็ด', 'candy/lush.png', case1_joke),
      new BaseItem('ลูกอม', 'ลัชส์ | ทั้งหมด 10 เม็ด', 'candy/lush.png', case1_joke),
   ],
   bgColor: '#FFCC80 '
};

var case6 = {
   id: 5,
   name: '<b>ถุงขนมเอราวัณ</b>',
   description: 'อร่อยๆ นะคร้าบบ',
   icon: 'images/cases/case6.png',
   type: 'กล่อง',
   blue: [
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 1 เม็ด', 'candy/mentos.png', case1_joke),
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 2 เม็ด', 'candy/mentos.png', case1_joke),
   ],
   purple: [
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 3 เม็ด', 'candy/mentos.png', case1_joke),
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 4 เม็ด', 'candy/mentos.png', case1_joke),
   ],
   pink: [
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 5 เม็ด', 'candy/mentos.png', case1_joke),
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 6 เม็ด', 'candy/mentos.png', case1_joke),
   ],
   red: [
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 7 เม็ด', 'candy/mentos.png', case1_joke),
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 8 เม็ด', 'candy/mentos.png', case1_joke),
   ],
   gold: [
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 9 เม็ด', 'candy/mentos.png', case1_joke),
      new BaseItem('ลูกอม', 'เมนส์ทอส | ทั้งหมด 10 เม็ด', 'candy/mentos.png', case1_joke),
   ],
   bgColor: '#B39DDB'
};

export default [case1, case2, case3, case4, case5, case6];