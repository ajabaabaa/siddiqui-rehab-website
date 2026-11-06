const fs=require('node:fs');const path=require('node:path');const root=path.resolve(__dirname,'..');const index=path.join(root,'index.html');
let en=fs.readFileSync(index,'utf8');
function replaceOne(a,b){if(!en.includes(a))throw Error('Missing English anchor: '+a);en=en.replace(a,b);}
if(!en.includes('class="language-switch"')){
replaceOne('<link rel="stylesheet" href="/styles.css">',`<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/polish.css">
<link rel="alternate" hreflang="en" href="https://siddiqui-rehab-production.up.railway.app/">
<link rel="alternate" hreflang="ur" href="https://siddiqui-rehab-production.up.railway.app/ur">
<link rel="alternate" hreflang="x-default" href="https://siddiqui-rehab-production.up.railway.app/">
<meta property="og:type" content="website"><meta property="og:title" content="Siddiqui Rehab | Physiotherapy & Rehabilitation"><meta property="og:description" content="Experienced physiotherapy and rehabilitation in Johar Town, Lahore."><meta property="og:locale" content="en_PK">`);
replaceOne('<header class="site-header"><div class="container nav">','<div class="utility-bar"><div class="container utility-inner"><span>Iqra Medical Complex · Johar Town, Lahore</span><a href="tel:+923006625594">0300 6625594 <span aria-hidden="true">↗</span></a></div></div><header class="site-header"><div class="container nav">');
replaceOne('<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">','<div class="header-actions"><div class="language-switch" role="group" aria-label="Choose website language"><a class="selected" href="/" lang="en" aria-current="page">English</a><a href="/ur" lang="ur">اردو</a></div><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">');
replaceOne('Menu <span aria-hidden="true">☰</span></button>','Menu <span aria-hidden="true">☰</span></button></div>');
replaceOne('<section id="services" class="services section">','<section class="trust-bar" aria-label="Clinic highlights"><div class="container trust-grid"><div><span class="trust-num">30<span class="trust-plus">+</span></span><span class="trust-text">Years of experience</span></div><div><span class="trust-num">05</span><span class="trust-text">Rehabilitation specialties</span></div><div><span class="trust-icon" aria-hidden="true">⌖</span><span class="trust-text">Johar Town · Lahore</span></div></div></section><section id="services" class="services section">');
replaceOne('</main><footer class="footer">','</main><a class="mobile-appointment" href="https://wa.me/923006625594?text=Assalam%20ualaikum%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20appointment." target="_blank" rel="noopener noreferrer" aria-label="Book appointment via WhatsApp"><span aria-hidden="true">✆</span> Book an appointment</a><footer class="footer">');
replaceOne('<div class="hero-visual" aria-label="Care focused on rehabilitation and movement">','<div class="hero-visual" aria-label="Care focused on rehabilitation and movement"><span class="hero-corner-accent" aria-hidden="true"></span>');
replaceOne('<div class="contact-panel"><div>','<div class="contact-panel"><p class="panel-title">CONTACT THE CLINIC <span aria-hidden="true">↗</span></p><div>');
const icons=[
'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4c-8 3-9 9-5 14 3 4 0 7-4 10M23 4c-5 5-4 8-1 12 3 4 3 8-1 12"/><path d="M13 10h9M12 18h12M10 25h14"/></svg>',
'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="11" cy="9" r="5"/><circle cx="22" cy="23" r="5"/><path d="M14 13l5 6M6 17l4-3M22 14l4-4"/></svg>',
'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="21" cy="5" r="3"/><path d="M13 13l6-4 4 6 5 3M12 30l4-9 6-2M5 22l11-4-3-5M4 30l8-5"/></svg>',
'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="22" height="22" rx="7"/><path d="M16 10v12M10 16h12"/></svg>',
'<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 7c-5-6-12 0-9 7-4 5 1 12 7 10 2 5 7 4 7-1V10c0-3-3-4-5-3ZM20 9c6-7 13 0 9 7 3 5-2 12-7 9-2 3-4 2-4-2"/><path d="M10 11c5 0 5 6 3 8M24 14c-4 0-5 4-4 7"/></svg>'];
let iconCount=0;en=en.replace(/<div class="service-symbol">[^<]*<\/div>/g,()=>'<div class="service-symbol" aria-hidden="true">'+icons[iconCount++]+'</div>');if(iconCount!==5)throw Error('Expected 5 icons, got '+iconCount);
fs.writeFileSync(index,en);
}
let ur=en;function t(a,b){if(!ur.includes(a))throw Error('Missing source phrase: '+a);ur=ur.split(a).join(b);}
const phrases=[
['<html lang="en">','<html lang="ur" dir="rtl">'],
['<title>Siddiqui Rehab | Physiotherapy & Rehabilitation in Lahore</title>','<title>صدیقی ریہیب | لاہور میں فزیوتھراپی اور بحالی</title>'],
['content="Siddiqui Rehab offers physiotherapy and rehabilitation in Johar Town, Lahore. Led by Dr. Naseem Ahmad Siddique (PT), with 30 years of experience."','content="صدیقی ریہیب، جوہر ٹاؤن لاہور میں فزیوتھراپی اور بحالی کی خدمات۔ ڈاکٹر نسیم احمد صدیقی (پی ٹی) کی زیرِ نگرانی، ۳۰ سالہ تجربہ۔"'],
['content="Siddiqui Rehab | Physiotherapy & Rehabilitation"','content="صدیقی ریہیب | فزیوتھراپی اور بحالی"'],
['content="Experienced physiotherapy and rehabilitation in Johar Town, Lahore."','content="جوہر ٹاؤن، لاہور میں تجربہ کار فزیوتھراپی اور بحالی کی خدمات۔"'],
['content="en_PK"','content="ur_PK"'],
['class="language-switch" role="group" aria-label="Choose website language"><a class="selected" href="/" lang="en" aria-current="page">English</a><a href="/ur" lang="ur">اردو</a>','class="language-switch" role="group" aria-label="ویب سائٹ کی زبان منتخب کریں"><a href="/" lang="en">English</a><a class="selected" href="/ur" lang="ur" aria-current="page">اردو</a>'],
['Skip to content','مرکزی مواد پر جائیں'],['aria-label="Siddiqui Rehab home"','aria-label="صدیقی ریہیب، مرکزی صفحہ"'],['aria-label="Main navigation"','aria-label="مرکزی نیویگیشن"'],['aria-label="Clinic highlights"','aria-label="کلینک کی نمایاں معلومات"'],['aria-label="Care focused on rehabilitation and movement"','aria-label="حرکت اور بحالی پر مرکوز نگہداشت"'],['aria-label="Book appointment via WhatsApp"','aria-label="واٹس ایپ پر اپائنٹمنٹ حاصل کریں"'],
['Iqra Medical Complex · Johar Town, Lahore','اقرا میڈیکل کمپلیکس · جوہر ٹاؤن، لاہور'],
['PHYSIOTHERAPY & REHABILITATION · LAHORE','فزیوتھراپی اور بحالی · لاہور'],
['PHYSIOTHERAPY & REHABILITATION','فزیوتھراپی اور بحالی'],['SIDDIQUI REHAB','صدیقی ریہیب'],
['Menu <span aria-hidden="true">☰</span>','مینو <span aria-hidden="true">☰</span>'],['>About</a>','>تعارف</a>'],['>Treatments</a>','>علاج</a>'],['>Contact</a>','>رابطہ</a>'],['>Book an appointment <span aria-hidden="true">↗</span>','>اپائنٹمنٹ لیں <span aria-hidden="true">↗</span>'],
['Healing lives.<br><em>Restoring movement.</em>','زندگی میں بہتری۔<br><em>حرکت کی بحالی۔</em>'],
['Expert care to help you move with greater comfort and confidence. Personalized physiotherapy and rehabilitation, guided by experience and focused on you.','زیادہ آرام اور اعتماد کے ساتھ حرکت کرنے میں مدد کے لیے تجربہ کار نگہداشت۔ آپ کی ضروریات کے مطابق فزیوتھراپی اور بحالی کی خدمات۔'],
['Book on WhatsApp','واٹس ایپ پر اپائنٹمنٹ'],['Call our clinic','کلینک کو کال کریں'],
['YEARS OF<br>EXPERIENCE','سال کا<br>تجربہ'],['Years of experience','سال کا تجربہ'],
['Rehabilitation specialties','بحالی کی خصوصی خدمات'],['Johar Town · Lahore','جوہر ٹاؤن · لاہور'],
['Led by<br>','زیرِ نگرانی<br>'],['Dr. Naseem Ahmad Siddique (PT)','ڈاکٹر نسیم احمد صدیقی (پی ٹی)'],
['A BETTER WAY TO MOVE','بہتر حرکت کی جانب'],['Care that meets<br>you where you are.','آپ کی ضرورت کے مطابق<br>نگہداشت اور رہنمائی۔'],['Movement matters.<br>','ہر حرکت اہم ہے۔<br>'],['Every step forward.','بہتری کی طرف ہر قدم۔'],
['HOW WE CAN HELP','ہم کس طرح مدد کر سکتے ہیں'],['Specialized care for<br><em>your movement goals.</em>','آپ کی بہتر حرکت کے لیے<br><em>خصوصی نگہداشت۔</em>'],
["Whether you're recovering from an injury, managing discomfort, or working toward better mobility, our team is here to support your rehabilitation.",'چاہے آپ چوٹ سے صحت یاب ہو رہے ہوں، درد سے نمٹ رہے ہوں، یا حرکت میں بہتری چاہتے ہوں، ہماری ٹیم بحالی کے سفر میں آپ کے ساتھ ہے۔'],
['01 / PAIN MANAGEMENT','۰۱ / درد میں کمی'],['02 / JOINT MOBILITY','۰۲ / جوڑوں کی حرکت'],['03 / ACTIVE RECOVERY','۰۳ / کھیلوں کی چوٹ'],['04 / RECOVERY SUPPORT','۰۴ / آپریشن کے بعد بحالی'],['05 / NEUROLOGICAL REHABILITATION','۰۵ / اعصابی بحالی'],
['Back & Neck Pain','کمر اور گردن کا درد'],['Physiotherapy support for everyday movement, mobility, and discomfort.','روزمرہ حرکت، جسمانی فعالیت اور تکلیف میں بہتری کے لیے فزیوتھراپی کی مدد۔'],
['Knee & Joint Care','گھٹنوں اور جوڑوں کی نگہداشت'],['Individualized treatment focused on improving joint movement and function.','جوڑوں کی حرکت اور کارکردگی بہتر بنانے کے لیے انفرادی علاج۔'],
['Sports Injuries','کھیلوں کے دوران لگنے والی چوٹیں'],['Rehabilitation guidance to support a safe, gradual return to activity.','سرگرمیوں میں محفوظ اور بتدریج واپسی کے لیے بحالی کی رہنمائی۔'],
['Post-Surgery Rehab','آپریشن کے بعد بحالی'],['Structured rehabilitation to support movement and recovery following surgery.','آپریشن کے بعد حرکت اور صحت یابی میں مدد کے لیے منظم بحالی۔'],
['Stroke & Neurological Conditions','فالج اور اعصابی مسائل'],['Rehabilitation care focused on mobility, balance, and day-to-day function.','حرکت، توازن اور روزمرہ امور کی انجام دہی پر مرکوز بحالی کی خدمات۔'],
['Progress begins with understanding where you are, and building a plan for where you want to be.','بہتری کا آغاز آپ کی موجودہ حالت کو سمجھنے اور اگلے مرحلے کے لیے مناسب منصوبہ بنانے سے ہوتا ہے۔'],
['EXPERIENCE YOU CAN TRUST','تجربہ اور توجہ'],['Personal care.<br><em>Experienced hands.</em>','انفرادی نگہداشت۔<br><em>تجربہ کار رہنمائی۔</em>'],
['Siddiqui Rehab is led by <strong>ڈاکٹر نسیم احمد صدیقی (پی ٹی)</strong>, bringing 30 years of experience to physiotherapy and rehabilitation.','صدیقی ریہیب کی سربراہی <strong>ڈاکٹر نسیم احمد صدیقی (پی ٹی)</strong> کرتے ہیں، جو فزیوتھراپی اور بحالی میں ۳۰ سال کا تجربہ رکھتے ہیں۔'],
['Our approach centers on individual needs, thoughtful treatment, and practical steps toward better movement and everyday well-being.','ہماری توجہ ہر فرد کی ضرورت، مناسب علاج اور بہتر حرکت و روزمرہ زندگی کے لیے عملی اقدامات پر ہے۔'],
['Get in touch','رابطہ کریں'],['YOUR FIRST STEP','آپ کا پہلا قدم'],
['Getting started<br><em>is simple.</em>','علاج کا آغاز<br><em>آسان ہے۔</em>'],
['Reach out','رابطہ کریں'],['Call or message the clinic to request an appointment.','اپائنٹمنٹ کے لیے کلینک کو کال یا پیغام بھیجیں۔'],
['Discuss your needs','اپنی ضرورت بتائیں'],['Share your concerns with the team and discuss a suitable consultation.','ٹیم کو اپنی تکلیف اور ضروریات بتائیں اور مشاورت کا وقت طے کریں۔'],
['Begin your care','علاج شروع کریں'],['Work with your physiotherapist on an individualized rehabilitation plan.','فزیوتھراپسٹ کے ساتھ مل کر اپنی ضرورت کے مطابق بحالی کا منصوبہ بنائیں۔'],
["WE'RE HERE TO HELP",'ہم آپ کی مدد کے لیے موجود ہیں'],
["Let's get you<br><em>moving again.</em>",'بہتر حرکت کی طرف<br><em>پہلا قدم اٹھائیں۔</em>'],
['Reach our team to ask a question or arrange your next appointment.','سوال پوچھنے یا اپائنٹمنٹ طے کرنے کے لیے ہماری ٹیم سے رابطہ کریں۔'],
['Message on WhatsApp','واٹس ایپ پر پیغام دیں'],['CONTACT THE CLINIC','کلینک سے رابطہ'],['CALL US','فون نمبر'],['EMAIL','ای میل'],['VISIT US','ہمارا پتہ'],
['Iqra Medical Complex<br>Johar Town, Lahore, Pakistan','اقرا میڈیکل کمپلیکس<br>جوہر ٹاؤن، لاہور، پاکستان'],
['Get directions ↗','راستہ معلوم کریں ↗'],['Book an appointment</a>','اپائنٹمنٹ لیں</a>'],
['Healing lives, restoring movement.','زندگی میں بہتری، حرکت کی بحالی۔'],
['Siddiqui Rehab. All rights reserved.','صدیقی ریہیب۔ جملہ حقوق محفوظ ہیں۔'],
['>0300 6625594<','><bdi dir="ltr">0300 6625594</bdi><'],['>0322 6034840<','><bdi dir="ltr">0322 6034840</bdi><'],
['>naseemphysio76@gmail.com<','><bdi dir="ltr">naseemphysio76@gmail.com</bdi><']
];
for(const [a,b] of phrases)t(a,b);
const greeting='Assalam%20ualaikum%2C%20I%20would%20like%20to%20book%20a%20physiotherapy%20appointment.';
t(greeting,encodeURIComponent('السلام علیکم، میں فزیوتھراپی کے لیے اپائنٹمنٹ لینا چاہتا/چاہتی ہوں۔'));
fs.writeFileSync(path.join(root,'ur.html'),ur);
console.log('Urdu page generated with '+phrases.length+' translations.');
