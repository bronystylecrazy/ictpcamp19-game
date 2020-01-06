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
   name: '<b>กล่องขนมครุฑา</b>',
   description: 'อร่อยๆ นะคร้าบบ',
   icon: 'http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5PT8elUwgKKZJmtEvo_kxITZk6StNe-Fz2pTu8Aj3eqVpIqgjVfjrRI9fSmtc1Nw-Kh3/178fx132f',
   type: 'ห่อขนม',
   blue: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 1 เม็ด', 'candy/heart1.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 2 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   purple: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 3 เม็ด', 'candy/heart1.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 4 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   pink: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 5 เม็ด', 'candy/heart1.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 6 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   red: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 7 เม็ด', 'candy/heart1.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 8 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   gold: [
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 9 เม็ด', 'candy/heart1.png', case1_joke),
      new BaseItem('ลูกอม', 'ฮาร์ทบีท | ทั้งหมด 10 เม็ด', 'candy/heart1.png', case1_joke),
   ],
   bgColor: 'blue-grey darken-4'
};
var case2 = {
   id: 1,
   name: 'กล่องขนมพญานาคราช',
   description: 'อร่อยๆ นะคร้าบบ',
   icon: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1YznfCcdzkR74vnw9TZwa-sYOOCzzoF6ZJ0jL6Qp9uj3Qbj_Uc6Z2z1I9WLMlhp9VPHu3g/178fx132f',
   type: 'กล่อง',
   blue: [
      new BaseItem('ลูกอม', 'อร่อย')
   ],
   purple: [
      new BaseItem('ลูกอม', 'อร่อย')
   ],
   pink: [
      new BaseItem('ลูกอม', 'อร่อย')
   ],
   red: [
      new BaseItem('ลูกอม', 'อร่อย')
   ],
   gold: [
      new BaseItem('ลูกอม', 'อร่อย')
   ],
   bgColor: 'blue-grey darken-4'
}

export default [case1, case2, case1, case2];