'use strict';
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

/* ══ TRANSLATION / LANGUAGE ══ */
const translations={
  en:{hero:{title:'Your <span>PDF</span> helper',description:'Merge, split, convert, compress and prepare PDFs quickly and privately.'},tools:{title:'Choose the <span>tool</span> you need',merge:'Merge PDF',split:'Split PDF',pdf2img:'PDF to Image',img2pdf:'Image to PDF',grayscale:'Grayscale PDF',a4print:'A4 Photo / ID Photo',compress:'Compress PDF',email:'Create an email'},merge:{title:'Merge PDF',description:'Combine multiple PDF files into one document.',dropTitle:'Drop PDFs here',dropDescription:'Select multiple files',dragHint:'Drag PDF cards to change the merge order.',addFiles:'Add more files',remove:'Remove PDF',button:'Merge PDF'},common:{selectFiles:'Select files'},footer:{privacy:'© 2025 PDF By Singha — Private: your files never leave this browser.',contact:'Contact us:'},static:{'ចែក PDF':'Split PDF','ចែក PDF ជាឯកសារច្រើន ឬជ្រើសទំព័រ':'Split a PDF into files or select pages.','ទម្លាក់ PDF នៅទីនេះ':'Drop PDF here','PDF ១ ឯកសារ':'One PDF file','ជ្រើស PDF':'Select PDF','របៀប':'Mode','ចែករៀងរាល់ទំព័រ':'Split every page','ជ្រើសទំព័រ':'Select pages','រៀងរាល់ N ទំព័រ':'Every N pages','ចែករៀងរាល់':'Split every','ចុចលើទំព័រ ដើម្បីជ្រើស/មិនជ្រើស':'Click pages to select or deselect.','ចែកឥឡូវ':'Split now','PDF → រូបភាព':'PDF to Image','បំប្លែង PDF ទំព័រនីមួយៗ → PNG ឬ JPG':'Convert each PDF page to PNG or JPG.','ទម្រង់':'Format','ទំហំ':'Size','បំប្លែងឥឡូវ':'Convert now','រូបភាព → PDF':'Image to PDF','បំប្លែងរូបភាព JPG/PNG ច្រើន ទៅជា PDF':'Convert multiple JPG/PNG images into a PDF.','ទម្លាក់រូបភាព':'Drop images here','ជ្រើសរូបភាព':'Select images','ទិស':'Orientation','ស្វ័យប្រវត្តិ':'Automatic','បញ្ឈរ':'Portrait','សេរ':'Landscape','ប្រែ PDF ទៅខ្មៅ-ស':'Convert PDF to grayscale','ប្រែ PDF ពណ៌ → Grayscale':'Convert a colour PDF to grayscale.','ការប្រែទៅខ្មៅ-ស នឹងបំប្លែង PDF ទំព័រទំព័រ ហើយស្ថាបនាជា PDF ថ្មី':'Grayscale converts each page and creates a new PDF.','ប្រែឥឡូវ':'Convert now','រូបថត → A4':'Photo to A4','ជ្រើសទំហំ':'Choose size','ដាក់រូបភាព (ច្រើនរូបបាន · អូសប្ដូរ order បាន)':'Add images (multiple files; drag to reorder)','ដាក់រូបភាពនៅទីនេះ':'Drop images here','ជម្រើស':'Options','ចន្លោះ (mm)':'Gap (mm)','គែម (mm)':'Margin (mm)','បន្ទាត់កាត់':'Cut lines','មាន':'Yes','គ្មាន':'No','ជ្រើសទំព័រ':'Pages','តាមចំនួនរូប':'Based on photo count','Preview':'Preview','ទំហំរូបនីមួយៗ':'Photo size','ចំនួនរូបបានដាក់':'Photos placed','ប្លង់ (cols × rows)':'Layout (columns × rows)','ចំនួនទំព័រ A4':'A4 pages','បង្កើត PDF ត្រៀមបោះពុម្ព':'Create print-ready PDF','ទម្លាក់ទំហំ PDF (PDF Compression)':'Compress PDF','កាត់បន្ថយទំហំ PDF ដោយរក្សាគុណភាព':'Reduce PDF size while retaining quality.','ជ្រើសកម្រិតទម្លាក់ទំហំ':'Choose compression level','ស្រាល':'Low','មធ្យម':'Medium','ខ្លាំង':'High','ទំហំដើម':'Original size','ប្រហែល':'Estimated','ទម្លាក់ទំហំឥឡូវ':'Compress now'}},
  km:{hero:{title:'ជំនួយការ <span>PDF</span> By Singha',description:'ផ្គុំ ចែក បំប្លែង ទម្លាក់ទំហំ និងកែសម្រួល PDF ងាយស្រួល រហ័ស'},tools:{title:'ជ្រើសរើស<span>ជំនួយការ</span>ដែលអ្នកត្រូវការ',merge:'ផ្គុំ PDF',split:'ចែក PDF',pdf2img:'PDF → រូបភាព',img2pdf:'រូបភាព → PDF',grayscale:'ប្រែទៅខ្មៅស',a4print:'រូបថត A4 / ID',compress:'ទម្លាក់ទំហំ PDF',email:'បង្កើត Email'},merge:{title:'ផ្គុំ PDF',description:'រួមបញ្ចូល PDF ច្រើនឯកសារទៅជាឯកសារតែមួយ',dropTitle:'ទម្លាក់ PDF នៅទីនេះ',dropDescription:'ជ្រើសបានច្រើន',dragHint:'អូសកាត PDF ដើម្បីប្ដូរលំដាប់ផ្គុំ។',addFiles:'បន្ថែមឯកសារ',remove:'លុប PDF',button:'ផ្គុំ PDF'},common:{selectFiles:'ជ្រើសឯកសារ'},footer:{privacy:'© 2025 PDF By Singha — ឯកសាររបស់អ្នកមិនត្រូវបានផ្ញើទៅម៉ាស៊ីនណាទេ។',contact:'ទំនាក់ទំនង:'}},
  th:{hero:{title:'ผู้ช่วย <span>PDF</span> ของคุณ',description:'รวม แยก แปลง บีบอัด และเตรียม PDF ได้รวดเร็วและเป็นส่วนตัว'},tools:{title:'เลือก<span>เครื่องมือ</span>ที่คุณต้องการ',merge:'รวม PDF',split:'แยก PDF',pdf2img:'PDF เป็นรูปภาพ',img2pdf:'รูปภาพเป็น PDF',grayscale:'PDF ขาวดำ',a4print:'รูป A4 / รูปบัตร',compress:'บีบอัด PDF',email:'สร้างอีเมล'},merge:{title:'รวม PDF',description:'รวมไฟล์ PDF หลายไฟล์เป็นเอกสารเดียว',dropTitle:'วาง PDF ที่นี่',dropDescription:'เลือกได้หลายไฟล์',dragHint:'ลากการ์ด PDF เพื่อเปลี่ยนลำดับการรวม',addFiles:'เพิ่มไฟล์',remove:'ลบ PDF',button:'รวม PDF'},common:{selectFiles:'เลือกไฟล์'},footer:{privacy:'© 2025 PDF By Singha — ไฟล์ของคุณไม่เคยออกจากเบราว์เซอร์นี้',contact:'ติดต่อเรา:'},static:{'ចែក PDF':'แยก PDF','ចែក PDF ជាឯកសារច្រើន ឬជ្រើសទំព័រ':'แยก PDF เป็นหลายไฟล์หรือเลือกหน้า','ទម្លាក់ PDF នៅទីនេះ':'วาง PDF ที่นี่','PDF ១ ឯកសារ':'PDF หนึ่งไฟล์','ជ្រើស PDF':'เลือก PDF','របៀប':'โหมด','ចែករៀងរាល់ទំព័រ':'แยกทุกหน้า','ជ្រើសទំព័រ':'เลือกหน้า','រៀងរាល់ N ទំព័រ':'ทุก N หน้า','ចែករៀងរាល់':'แยกทุก','ចុចលើទំព័រ ដើម្បីជ្រើស/មិនជ្រើស':'คลิกหน้าเพื่อเลือกหรือยกเลิกเลือก','ចែកឥឡូវ':'แยกตอนนี้','PDF → រូបភាព':'PDF เป็นรูปภาพ','បំប្លែង PDF ទំព័រនីមួយៗ → PNG ឬ JPG':'แปลงแต่ละหน้าเป็น PNG หรือ JPG','ទម្រង់':'รูปแบบ','ទំហំ':'ขนาด','បំប្លែងឥឡូវ':'แปลงตอนนี้','រូបភាព → PDF':'รูปภาพเป็น PDF','បំប្លែងរូបភាព JPG/PNG ច្រើន ទៅជា PDF':'แปลงรูป JPG/PNG หลายรูปเป็น PDF','ទម្លាក់រូបភាព':'วางรูปภาพที่นี่','ជ្រើសរូបភាព':'เลือกรูปภาพ','ទិស':'แนวกระดาษ','ស្វ័យប្រវត្តិ':'อัตโนมัติ','បញ្ឈរ':'แนวตั้ง','សេរ':'แนวนอน','ប្រែ PDF ទៅខ្មៅ-ស':'แปลง PDF เป็นขาวดำ','ប្រែ PDF ពណ៌ → Grayscale':'แปลง PDF สีเป็นขาวดำ','ប្រែឥឡូវ':'แปลงตอนนี้','រូបថត → A4':'รูปภาพเป็น A4','ជ្រើសទំហំ':'เลือกขนาด','ជម្រើស':'ตัวเลือก','ចន្លោះ (mm)':'ระยะห่าง (มม.)','គែម (mm)':'ขอบ (มม.)','បន្ទាត់កាត់':'เส้นตัด','មាន':'มี','គ្មាន':'ไม่มี','តាមចំនួនរូប':'ตามจำนวนรูป','Preview':'ตัวอย่าง','បង្កើត PDF ត្រៀមបោះពុម្ព':'สร้าง PDF สำหรับพิมพ์','ទម្លាក់ទំហំ PDF (PDF Compression)':'บีบอัด PDF','កាត់បន្ថយទំហំ PDF ដោយរក្សាគុណភាព':'ลดขนาด PDF โดยคงคุณภาพ','ជ្រើសកម្រិតទម្លាក់ទំហំ':'เลือกระดับการบีบอัด','ស្រាល':'ต่ำ','មធ្យម':'ปานกลาง','ខ្លាំង':'สูง','ទំហំដើម':'ขนาดเดิม','ប្រហែល':'ประมาณ','ទម្លាក់ទំហំឥឡូវ':'บีบอัดตอนนี้'}}
};
Object.assign(translations.en,{dynamic:{validation:{pdf:'A PDF file is required: {name}',image:'An image file is required: {name}'},common:{loading:'Loading...',saving:'Saving...',complete:'Complete!',download:'Download',error:'Error: {message}',page:'Page {current}/{total}',processing:'Processing {current}/{total}...'},merge:{minimum:'At least 2 PDF files are required.',processing:'Merging {current}/{total}...',success:'PDFs merged successfully!',result:'{count} files merged into 1 ({size})'},split:{processing:'Splitting {current}/{total}...',success:'PDF split successfully!',result:'Split into {count} files',page:'Page {page}'},pdf2img:{success:'Conversion successful!',result:'{count} pages → {count} images'},img2pdf:{success:'Conversion successful!',result:'{count} images → PDF ({size})'},grayscale:{success:'Grayscale conversion successful!',result:'{count} pages → Grayscale ({size})'},a4:{minimum:'At least one image is required.',preparing:'Preparing...',processing:'Processing image {current}/{total}...',creating:'Creating PDF...',placing:'Placing images...',success:'Print-ready PDF is ready!',result:'{count} photos · {sizeLabel} · {pages} A4 pages · {size}',photosPerA4:'{count} photos / A4',addImages:'Add images',photos:'photos',pages:'pages'},compress:{loading:'Loading PDF...',processing:'Compressing {current}/{total}...',success:'PDF compressed successfully!',result:'{original} → {compressed} · {detail}',saved:'Saved {percent}%',alreadySmall:'File is already small'}}});
Object.assign(translations.km,{dynamic:{validation:{pdf:'ត្រូវការ PDF: {name}',image:'ត្រូវការរូបភាព: {name}'},common:{loading:'ផ្ទុក...',saving:'រក្សាទុក...',complete:'រួចរាល់!',download:'ទាញយក',error:'កំហុស: {message}',page:'ទំព័រ {current}/{total}',processing:'ដំណើរការ {current}/{total}...'},merge:{minimum:'ត្រូវការ PDF យ៉ាងតិច 2',processing:'ផ្គុំ {current}/{total}...',success:'ផ្គុំ PDF ជោគជ័យ!',result:'ផ្គុំ {count} ឯកសារ → 1 ({size})'},split:{processing:'ចែក {current}/{total}...',success:'ចែក PDF ជោគជ័យ!',result:'ចែកបាន {count} ឯកសារ',page:'ទំព័រ {page}'},pdf2img:{success:'បំប្លែងជោគជ័យ!',result:'{count} ទំព័រ → {count} រូបភាព'},img2pdf:{success:'បំប្លែងជោគជ័យ!',result:'{count} រូប → PDF ({size})'},grayscale:{success:'ប្រែខ្មៅ-ស ជោគជ័យ!',result:'{count} ទំព័រ → ខ្មៅ-ស ({size})'},a4:{minimum:'ត្រូវការរូបភាព',preparing:'រៀបចំ...',processing:'ដំណើរការរូប {current}/{total}...',creating:'បង្កើត PDF...',placing:'ដាក់រូប...',success:'PDF ត្រៀមបោះពុម្ព!',result:'{count} ក្បាល ទំហំ {sizeLabel} · {pages} ទំព័រ A4 · {size}',photosPerA4:'{count} រូបថត / A4',addImages:'បន្ថែមរូបភាព',photos:'ក្បាល',pages:'ទំព័រ'},compress:{loading:'ផ្ទុក PDF...',processing:'ស្ទង់ {current}/{total}...',success:'ទម្លាក់ទំហំ PDF ជោគជ័យ!',result:'{original} → {compressed} · {detail}',saved:'បានសន្សំ {percent}%',alreadySmall:'(ឯកសារតូចស្រាប់)'}}});
Object.assign(translations.th,{dynamic:{validation:{pdf:'ต้องใช้ไฟล์ PDF: {name}',image:'ต้องใช้รูปภาพ: {name}'},common:{loading:'กำลังโหลด...',saving:'กำลังบันทึก...',complete:'เสร็จแล้ว!',download:'ดาวน์โหลด',error:'ข้อผิดพลาด: {message}',page:'หน้า {current}/{total}',processing:'กำลังประมวลผล {current}/{total}...'},merge:{minimum:'ต้องมี PDF อย่างน้อย 2 ไฟล์',processing:'กำลังรวม {current}/{total}...',success:'รวม PDF สำเร็จ!',result:'รวม {count} ไฟล์เป็น 1 ไฟล์ ({size})'},split:{processing:'กำลังแยก {current}/{total}...',success:'แยก PDF สำเร็จ!',result:'แยกเป็น {count} ไฟล์',page:'หน้า {page}'},pdf2img:{success:'แปลงสำเร็จ!',result:'{count} หน้า → {count} รูปภาพ'},img2pdf:{success:'แปลงสำเร็จ!',result:'{count} รูปภาพ → PDF ({size})'},grayscale:{success:'แปลงเป็นขาวดำสำเร็จ!',result:'{count} หน้า → ขาวดำ ({size})'},a4:{minimum:'ต้องมีรูปภาพอย่างน้อยหนึ่งรูป',preparing:'กำลังเตรียม...',processing:'กำลังประมวลผลรูป {current}/{total}...',creating:'กำลังสร้าง PDF...',placing:'กำลังวางรูปภาพ...',success:'PDF สำหรับพิมพ์พร้อมแล้ว!',result:'{count} รูป · {sizeLabel} · {pages} หน้า A4 · {size}',photosPerA4:'{count} รูป / A4',addImages:'เพิ่มรูปภาพ',photos:'รูป',pages:'หน้า'},compress:{loading:'กำลังโหลด PDF...',processing:'กำลังบีบอัด {current}/{total}...',success:'บีบอัด PDF สำเร็จ!',result:'{original} → {compressed} · {detail}',saved:'ประหยัด {percent}%',alreadySmall:'(ไฟล์มีขนาดเล็กอยู่แล้ว)'}}});

/* Complete V3's original Khmer text map.  The V2 JSON keys guided these labels,
   but V3 keeps its lightweight, single-file translation dictionary. */
Object.assign(translations.en.common,{language:'Language'});Object.assign(translations.km.common,{language:'ភាសា'});Object.assign(translations.th.common,{language:'ภาษา'});
Object.assign(translations.en.footer,{link:'Click here'});Object.assign(translations.km.footer,{link:'ចុចទីនេះ'});Object.assign(translations.th.footer,{link:'คลิกที่นี่'});
Object.assign(translations.km,{static:{}});
Object.assign(translations.en.static,{
  'រូបថត → A4':'Photo to A4','ដាក់រូបថត ច្រើនរូប (3×4 ឬ 4×6) ក្នុង A4 ១ ទំព័រ · ត្រូវបានកាត់ Cover Crop ឲ្យជា':'Place multiple 3×4 or 4×6 photos on one A4 page with cover cropping.',
  '① ជ្រើសទំហំ':'① Choose size','② ដាក់រូបភាព (ច្រើនរូបបាន · អូសប្ដូរ order បាន)':'② Add images (multiple files; drag to reorder)','③ ជម្រើស':'③ Options','④ Preview':'④ Preview',
  'ទម្លាក់រូបភាពនៅទីនេះ':'Drop images here','JPG · PNG · WEBP · ជ្រើសបានច្រើនរូប · រូបនីមួយៗ cover-cropped ឲ្យបានជាទំហំ':'JPG · PNG · WEBP · multiple files · each photo is cover-cropped to size',
  'ជ្រើសរូប':'Select images','☝️ អូសប្ដូរលំដាប់រូបភាព':'☝️ Drag to reorder images','1 ទំព័រ':'1 page','2 ទំព័រ':'2 pages',
  'រូបត្រូវបាន':'Photos are','ឲ្យបានត្រឹមត្រូវ ដោយគ្មាន stretch ។':'correctly cover-cropped without stretching.','💡 អូស thumbnail ប្ដូរ order បាន':'💡 Drag thumbnails to reorder.',
  'JPG 85% · 144 DPI':'JPG 85% · 144 DPI','ទំហំតូចបន្តិច':'Smaller file','គុណភាពល្អ':'Good quality','JPG 72% · 96 DPI':'JPG 72% · 96 DPI','ទំហំតូចល្មមៗ':'Balanced size','ល្អបំផុត':'Best balance','JPG 55% · 72 DPI':'JPG 55% · 72 DPI','ទំហំតូចបំផុត':'Smallest file','គុណភាពទាប':'Lower quality','JPG 40% · 48 DPI':'JPG 40% · 48 DPI','ទំហំតូចខ្លាំង':'Very small file','Email/ចែករំលែក':'Email / sharing',
  '✂️ មាន':'✂️ Yes','គ្មាន':'No','ស្របរូប':'Fit image','Letter':'Letter','Max':'Maximum','រូប ID':'ID photo','រូបធម្មតា':'Standard photo','ប័ណ្ណ EU':'EU card'
});
Object.assign(translations.th.static,{
  'រូបថត → A4':'รูปภาพเป็น A4','ដាក់រូបថត ច្រើនរូប (3×4 ឬ 4×6) ក្នុង A4 ១ ទំព័រ · ត្រូវបានកាត់ Cover Crop ឲ្យជា':'วางรูป 3×4 หรือ 4×6 หลายรูปใน A4 หนึ่งหน้า พร้อมครอปแบบพอดี',
  '① ជ្រើសទំហំ':'① เลือกขนาด','② ដាក់រូបភាព (ច្រើនរូបបាន · អូសប្ដូរ order បាន)':'② เพิ่มรูปภาพหลายรูป และลากเพื่อเรียงลำดับ','③ ជម្រើស':'③ ตัวเลือก','④ Preview':'④ ตัวอย่าง',
  'ទម្លាក់រូបភាពនៅទីនេះ':'วางรูปภาพที่นี่','JPG · PNG · WEBP · ជ្រើសបានច្រើនរូប · រូបនីមួយៗ cover-cropped ឲ្យបានជាទំហំ':'JPG · PNG · WEBP · เลือกได้หลายรูป · ครอปแบบพอดีตามขนาด',
  'ជ្រើសរូប':'เลือกรูปภาพ','☝️ អូសប្ដូរលំដាប់រូបភាព':'☝️ ลากเพื่อเรียงลำดับรูปภาพ','1 ទំព័រ':'1 หน้า','2 ទំព័រ':'2 หน้า',
  'រូបត្រូវបាន':'รูปภาพจะถูก','ឲ្យបានត្រឹមត្រូវ ដោយគ្មាន stretch ។':'ครอปแบบพอดีโดยไม่ยืดภาพ','💡 អូស thumbnail ប្ដូរ order បាន':'💡 ลากภาพตัวอย่างเพื่อเรียงลำดับ',
  'ទំហំរូបនីមួយៗ':'ขนาดรูปภาพ','ចំនួនរូបបានដាក់':'จำนวนรูปที่วาง','ប្លង់ (cols × rows)':'เค้าโครง (คอลัมน์ × แถว)','ចំនួនទំព័រ A4':'จำนวนหน้า A4',
  'JPG 85% · 144 DPI':'JPG 85% · 144 DPI','ទំហំតូចបន្តិច':'ไฟล์เล็กลงเล็กน้อย','គុណភាពល្អ':'คุณภาพดี','JPG 72% · 96 DPI':'JPG 72% · 96 DPI','ទំហំតូចល្មមៗ':'ขนาดสมดุล','ល្អបំផុត':'สมดุลที่สุด','JPG 55% · 72 DPI':'JPG 55% · 72 DPI','ទំហំតូចបំផុត':'ไฟล์เล็กที่สุด','គុណភាពទាប':'คุณภาพต่ำกว่า','JPG 40% · 48 DPI':'JPG 40% · 48 DPI','ទំហំតូចខ្លាំង':'ไฟล์เล็กมาก','Email/ចែករំលែក':'อีเมล / แชร์',
  '✂️ មាន':'✂️ มี','គ្មាន':'ไม่มี','ស្របរូប':'พอดีรูป','Letter':'Letter','Max':'สูงสุด','រូប ID':'รูปบัตร','រូបធម្មតា':'รูปทั่วไป','ប័ណ្ណ EU':'บัตร EU'
});
Object.assign(translations.km.static,{
  'Language':'ភាសា','Click here':'ចុចទីនេះ','Letter':'លិខិត','Max':'អតិបរមា','Preview':'មើលជាមុន','Cover Crop':'កាត់ពេញស៊ុម','stretch ។':'ដោយមិនលាតរូប','ឲ្យបានត្រឹមត្រូវ ដោយគ្មាន stretch ។':'ឲ្យបានត្រឹមត្រូវ ដោយមិនលាតរូប។'
});
Object.assign(translations.en.static,{'Cover Crop':'Cover Crop','stretch ។':'stretch.','ឲ្យបានត្រឹមត្រូវ ដោយគ្មាន stretch ។':'correctly cover-cropped without stretching.','ℹ️ ការប្រែទៅខ្មៅ-ស នឹងបំប្លែង PDF ទំព័រទំព័រ ហើយស្ថាបនាជា PDF ថ្មី':'ℹ️ Grayscale converts each page and creates a new PDF.'});
Object.assign(translations.th.static,{'Cover Crop':'ครอปแบบพอดี','stretch ។':'โดยไม่ยืดภาพ','ឲ្យបានត្រឹមត្រូវ ដោយគ្មាន stretch ។':'ครอปแบบพอดีโดยไม่ยืดภาพ','ℹ️ ការប្រែទៅខ្មៅ-ស នឹងបំប្លែង PDF ទំព័រទំព័រ ហើយស្ថាបនាជា PDF ថ្មី':'ℹ️ การแปลงขาวดำจะแปลงทุกหน้าและสร้าง PDF ใหม่'});
Object.assign(translations.en.static,{'JPG, PNG, WEBP (ជ្រើសបានច្រើន)':'JPG, PNG, WEBP (multiple files)'});
Object.assign(translations.th.static,{'JPG, PNG, WEBP (ជ្រើសបានច្រើន)':'JPG, PNG, WEBP (เลือกได้หลายไฟล์)'});
Object.assign(translations.en.dynamic.a4,{badges:{'3x4':'ID photo','4x6':'Standard photo','2x2':'Visa / US','35x45':'EU card'}});
Object.assign(translations.km.dynamic.a4,{badges:{'3x4':'រូបអត្តសញ្ញាណ','4x6':'រូបធម្មតា','2x2':'ទិដ្ឋាការ / អាមេរិក','35x45':'ប័ណ្ណសហភាពអឺរ៉ុប'}});
Object.assign(translations.th.dynamic.a4,{badges:{'3x4':'รูปบัตร','4x6':'รูปทั่วไป','2x2':'วีซ่า / สหรัฐฯ','35x45':'บัตรสหภาพยุโรป'}});

let currentLanguage='en';
function t(path,params={}){const value=path.split('.').reduce((item,key)=>item&&item[key],translations[currentLanguage])||path;return typeof value==='string'?value.replace(/\{(\w+)\}/g,(_,key)=>params[key]??`{${key}}`):value;}
function setLanguage(language){
  currentLanguage=translations[language]?language:'en';
  localStorage.setItem('pdfBySinghaLanguage',currentLanguage);
  document.documentElement.lang=currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=t(el.dataset.i18n));
  translateStaticText();
  const selector=document.getElementById('language-selector');if(selector)selector.value=currentLanguage;
  if(FILES.merge.length)renderMergePreview();
  if(document.getElementById('size-row'))buildSizeCards();
  if(photoItems.length){renderPhotoGrid();updateA4Preview();}
  document.querySelectorAll('.pthumb[data-p]').forEach(thumb=>{
    const label=thumb.querySelector('span');if(label)label.textContent=t('dynamic.split.page',{page:thumb.dataset.p});
  });
}
function translateStaticText(){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    if(node.parentElement.closest('[data-i18n],script,style'))return;
    const source=node._pdfBySinghaSource??node.nodeValue.trim();
    node._pdfBySinghaSource=source;
    const map=translations[currentLanguage].static||{};
    const bare=source.replace(/^[^\p{L}\p{N}]+/u,'');
    const prefix=source.slice(0,source.length-bare.length);
    let translated=map[source]||(currentLanguage==='km'?source:translations.en.static?.[source]);
    if(!translated&&bare!==source){
      translated=map[bare]||(currentLanguage==='km'?bare:translations.en.static?.[bare]);
      if(translated)translated=prefix+translated;
    }
    if(source&&translated)node.nodeValue=node.nodeValue.replace(source,translated);
  });
}

/* ══ GLOBAL STATE ══ */
const FILES={merge:[],split:[],pdf2img:[],img2pdf:[],grayscale:[],compress:[]};
let splitSel=[],splitTotal=0;
let mergeDragSrcIdx=null;

// A4 Photo state
const SIZES={
  '3x4': {label:'3×4 cm', wCm:3,   hCm:4.0},
  '4x6': {label:'4×6 cm', wCm:4,   hCm:6.0},
  '2x2': {label:'2×2″',   wCm:5.08,hCm:5.08},
  '35x45':{label:'3.5×4.5',wCm:3.5,hCm:4.5},
};
let curSzKey='3x4';
let photoItems=[]; // [{file, img (HTMLImageElement), id}]
let dragSrcIdx=null;

// Compress state
let compressLevel='med';
const CL_CFG={
  low: {q:.85,scale:2.0, label:'low'},
  med: {q:.72,scale:1.33,label:'medium'},
  high:{q:.55,scale:1.0, label:'high'},
  max: {q:.40,scale:.67, label:'Max'},
};

/* ══ HELPERS ══ */
function fmtSz(b){
  if(b<1024)return b+' B';
  if(b<1048576)return(b/1024).toFixed(1)+' KB';
  return(b/1048576).toFixed(1)+' MB';
}
function uid(){return Math.random().toString(36).slice(2);}
function showNotif(msg,t=''){
  const n=document.getElementById('notif');
  n.textContent=msg;n.className='notif show '+t;
  clearTimeout(n._t);n._t=setTimeout(()=>n.classList.remove('show'),3200);
}

/* ══ TOOL OPEN ══ */
function openTool(id){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  document.getElementById('panel-'+id).scrollIntoView({behavior:'smooth',block:'start'});
}

/* ══ GENERIC FILE HANDLING ══ */
function doDrag(e,t){e.preventDefault();document.getElementById('dz-'+t).classList.add('over');}
function doDrop(e,t){
  e.preventDefault();document.getElementById('dz-'+t).classList.remove('over');
  if(e.dataTransfer.files.length)procF(e.dataTransfer.files,t);
}
function addF(e,t){procF(e.target.files,t);e.target.value='';}

function procF(newFiles,t){
  const needPDF=['merge','split','pdf2img','grayscale','compress'].includes(t);
  Array.from(newFiles).forEach(f=>{
    const ok=needPDF?(f.type==='application/pdf'||f.name.endsWith('.pdf')):f.type.startsWith('image/');
    if(!ok){showNotif(t(needPDF?'dynamic.validation.pdf':'dynamic.validation.image',{name:f.name}),'err');return;}
    if(['split','pdf2img','grayscale','compress'].includes(t)) FILES[t]=[f];
    else FILES[t].push(f);
  });
  if(t==='merge')renderMergePreview();else renderFL(t);
  if(t==='split'&&FILES.split.length)loadSplitPreview();
  if(t==='compress'&&FILES.compress.length)showCompressInfo();
}

function renderFL(t){
  const el=document.getElementById('fl-'+t);
  el.innerHTML='';
  FILES[t].forEach((f,i)=>{
    const pd=f.type==='application/pdf'||f.name.endsWith('.pdf');
    el.innerHTML+=`<div class="fi"><span class="ficon">${pd?'📄':'🖼️'}</span>
      <span class="fname">${f.name}</span><span class="fsize">${fmtSz(f.size)}</span>
      <button class="frm" onclick="rmF('${t}',${i})">✕</button></div>`;
  });
}

/* ══ MERGE PREVIEW / REORDER ══
   The displayed array is FILES.merge itself: no secondary visual order exists. */
function renderMergePreview(){
  const dropzone=document.getElementById('dz-merge');
  const section=document.getElementById('merge-preview-section');
  const grid=document.getElementById('merge-grid');
  const mergeButton=document.getElementById('btn-merge');
  const hasFiles=FILES.merge.length>0;
  dropzone.hidden=hasFiles;section.hidden=!hasFiles;mergeButton.style.display=hasFiles?'inline-flex':'none';
  if(!hasFiles){grid.innerHTML='';return;}
  grid.innerHTML='';
  FILES.merge.forEach((file,index)=>{
    const card=document.createElement('article');card.className='merge-card';card.draggable=true;card.dataset.index=index;
    const order=document.createElement('span');order.className='merge-order';order.textContent=index+1;
    const remove=document.createElement('button');remove.className='merge-remove';remove.type='button';remove.textContent='×';remove.title=t('merge.remove');remove.setAttribute('aria-label',t('merge.remove'));remove.onclick=e=>{e.stopPropagation();removeMergeFile(index);};
    const thumb=document.createElement('div');thumb.className='merge-thumb';thumb.setAttribute('aria-label',file.name);
    const info=document.createElement('div');info.className='merge-info';info.innerHTML=`<div class="merge-name" title="${escapeHtml(file.name)}">${escapeHtml(file.name)}</div><div class="merge-size">${fmtSz(file.size)}</div>`;
    card.append(order,remove,thumb,info);
    attachMergeDragEvents(card,index);
    grid.appendChild(card);renderMergeThumbnail(file,thumb);
  });
  const add=document.createElement('label');add.className='merge-add';add.innerHTML=`<span class="merge-add-icon">＋</span><span>${t('merge.addFiles')}</span><input type="file" accept=".pdf,application/pdf" multiple aria-label="${t('merge.addFiles')}">`;
  add.querySelector('input').onchange=e=>addF(e,'merge');grid.appendChild(add);
}
function escapeHtml(value){const el=document.createElement('span');el.textContent=value;return el.innerHTML;}
async function renderMergeThumbnail(file,container){
  try{
    const pdf=await pdfjsLib.getDocument({data:await file.arrayBuffer()}).promise;
    const page=await pdf.getPage(1);const viewport=page.getViewport({scale:.33});
    const canvas=document.createElement('canvas');canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
    await page.render({canvasContext:canvas.getContext('2d'),viewport}).promise;
    container.replaceChildren(canvas);pdf.destroy();
  }catch(error){container.textContent='📄';container.title=file.name;console.warn('Could not render merge thumbnail',error);}
}
function attachMergeDragEvents(card,index){
  card.ondragstart=e=>{mergeDragSrcIdx=index;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',String(index));card.classList.add('dragging');};
  card.ondragend=()=>{mergeDragSrcIdx=null;document.querySelectorAll('.merge-card').forEach(el=>el.classList.remove('dragging','drag-over-card'));};
  card.ondragover=e=>{e.preventDefault();e.dataTransfer.dropEffect='move';};
  card.ondragenter=()=>{if(mergeDragSrcIdx!==null&&mergeDragSrcIdx!==index)card.classList.add('drag-over-card');};
  card.ondragleave=()=>card.classList.remove('drag-over-card');
  card.ondrop=e=>{e.preventDefault();e.stopPropagation();if(mergeDragSrcIdx===null||mergeDragSrcIdx===index)return;const[moved]=FILES.merge.splice(mergeDragSrcIdx,1);FILES.merge.splice(index,0,moved);renderMergePreview();};
}
function removeMergeFile(index){FILES.merge.splice(index,1);renderMergePreview();}

function rmF(t,i){
  FILES[t].splice(i,1);if(t==='merge')renderMergePreview();else renderFL(t);
  if(t==='split'&&!FILES.split.length){
    document.getElementById('split-settings').style.display='none';
    document.getElementById('split-pg-preview').style.display='none';
    document.getElementById('btn-split').style.display='none';
  }
  if(t==='compress')document.getElementById('compress-info').style.display='none';
}

/* ══ PROGRESS / RESULT ══ */
function setProg(t,pct,txt){
  document.getElementById('pg-'+t).classList.add('vis');
  document.getElementById('pgf-'+t).style.width=pct+'%';
  if(txt)document.getElementById('pgt-'+t).textContent=txt;
}
function hideProg(t){document.getElementById('pg-'+t).classList.remove('vis');}
function showRes(t,html){const e=document.getElementById('res-'+t);e.innerHTML=html;e.classList.add('vis');}
function dlBlob(blob,name){
  const u=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=u;a.download=name;a.click();
  setTimeout(()=>URL.revokeObjectURL(u),5000);
}

/* ══ MERGE ══ */
async function mergePDFs(){
  if(FILES.merge.length<2){showNotif(t('dynamic.merge.minimum'),'err');return;}
  const btn=document.querySelector('#panel-merge .pbtn');btn.disabled=true;
  setProg('merge',10,t('dynamic.common.loading'));
  try{
    const out=await PDFLib.PDFDocument.create();
    for(let i=0;i<FILES.merge.length;i++){
      setProg('merge',10+i/FILES.merge.length*84,t('dynamic.merge.processing',{current:i+1,total:FILES.merge.length}));
      const pdf=await PDFLib.PDFDocument.load(await FILES.merge[i].arrayBuffer());
      (await out.copyPages(pdf,pdf.getPageIndices())).forEach(p=>out.addPage(p));
    }
    setProg('merge',97,t('dynamic.common.saving'));
    const blob=new Blob([await out.save()],{type:'application/pdf'});
    window._mBlob=blob;setProg('merge',100,t('dynamic.common.complete'));
    showRes('merge',`<div class="res-card"><div class="res-info"><h4>✅ ${t('dynamic.merge.success')}</h4><p>${t('dynamic.merge.result',{count:FILES.merge.length,size:fmtSz(blob.size)})}</p></div><button class="dl-btn" onclick="dlBlob(window._mBlob,'merged.pdf')">⬇️ ${t('dynamic.common.download')}</button></div>`);
    showNotif(t('dynamic.merge.success'),'ok');
  }catch(e){showNotif(t('dynamic.common.error',{message:e.message}),'err');console.error(e);}
  btn.disabled=false;setTimeout(()=>hideProg('merge'),2000);
}

/* ══ SPLIT ══ */
async function loadSplitPreview(){
  setProg('split',20,t('dynamic.common.loading'));
  document.getElementById('split-settings').style.display='flex';
  document.getElementById('btn-split').style.display='inline-flex';
  try{
    const pdf=await pdfjsLib.getDocument({data:await FILES.split[0].arrayBuffer()}).promise;
    splitTotal=pdf.numPages;
    splitSel=Array.from({length:splitTotal},(_,i)=>i+1);
    const grid=document.getElementById('pgrid');grid.innerHTML='';
    if(document.getElementById('split-mode').value==='range')
      document.getElementById('split-pg-preview').style.display='block';
    for(let i=1;i<=splitTotal;i++){
      setProg('split',20+i/splitTotal*72,t('dynamic.common.processing',{current:i,total:splitTotal}));
      const pg=await pdf.getPage(i);const vp=pg.getViewport({scale:.22});
      const cv=document.createElement('canvas');cv.width=vp.width;cv.height=vp.height;
      await pg.render({canvasContext:cv.getContext('2d'),viewport:vp}).promise;
      const th=document.createElement('div');th.className='pthumb sel';th.dataset.p=i;
      th.innerHTML=`<span>${t('dynamic.split.page',{page:i})}</span>`;th.prepend(cv);th.onclick=()=>togPage(th,i);
      grid.appendChild(th);
    }
    setProg('split',100,t('dynamic.common.complete'));setTimeout(()=>hideProg('split'),900);
  }catch(e){showNotif(t('dynamic.common.error',{message:e.message}),'err');}
}
function togPage(el,p){
  if(splitSel.includes(p)){splitSel=splitSel.filter(x=>x!==p);el.classList.remove('sel');}
  else{splitSel.push(p);splitSel.sort((a,b)=>a-b);el.classList.add('sel');}
}
function onSplitMode(){
  const m=document.getElementById('split-mode').value;
  document.getElementById('split-pg-preview').style.display=m==='range'?'block':'none';
  document.getElementById('split-n-g').style.display=m==='every'?'flex':'none';
}
async function splitPDF(){
  if(!FILES.split.length){showNotif(t('dynamic.validation.pdf',{name:''}).replace(/:\s*$/,''),'err');return;}
  const mode=document.getElementById('split-mode').value;
  const btn=document.getElementById('btn-split');btn.disabled=true;
  setProg('split',10,t('dynamic.common.loading'));
  try{
    const src=await PDFLib.PDFDocument.load(await FILES.split[0].arrayBuffer());
    const tot=src.getPageCount();let groups=[];
    if(mode==='all')groups=Array.from({length:tot},(_,i)=>[i]);
    else if(mode==='range')groups=splitSel.map(p=>[p-1]);
    else{const n=parseInt(document.getElementById('split-n').value)||1;for(let i=0;i<tot;i+=n)groups.push(Array.from({length:Math.min(n,tot-i)},(_,j)=>i+j));}
    const zip=new JSZip();
    for(let g=0;g<groups.length;g++){
      setProg('split',10+g/groups.length*84,t('dynamic.split.processing',{current:g+1,total:groups.length}));
      const nd=await PDFLib.PDFDocument.create();
      (await nd.copyPages(src,groups[g])).forEach(p=>nd.addPage(p));
      zip.file(`page_${g+1}.pdf`,await nd.save());
    }
    const zb=await zip.generateAsync({type:'blob'});window._sBlob=zb;
    setProg('split',100,t('dynamic.common.complete'));
    showRes('split',`<div class="res-card"><div class="res-info"><h4>✅ ${t('dynamic.split.result',{count:groups.length})}</h4></div><button class="dl-btn" onclick="dlBlob(window._sBlob,'split.zip')">⬇️ ZIP</button></div>`);
    showNotif(t('dynamic.split.success'),'ok');
  }catch(e){showNotif(t('dynamic.common.error',{message:e.message}),'err');console.error(e);}
  btn.disabled=false;setTimeout(()=>hideProg('split'),2000);
}

/* ══ PDF→IMAGES ══ */
async function pdfToImgs(){
  if(!FILES.pdf2img.length){showNotif(t('dynamic.validation.pdf',{name:''}).replace(/:\s*$/,''),'err');return;}
  const btn=document.querySelector('#panel-pdf2img .pbtn');btn.disabled=true;
  const sc=parseFloat(document.getElementById('img-dpi').value);
  const fmt=document.getElementById('img-fmt').value;
  setProg('pdf2img',5,t('dynamic.common.loading'));
  try{
    const pdf=await pdfjsLib.getDocument({data:await FILES.pdf2img[0].arrayBuffer()}).promise;
    const tot=pdf.numPages;const zip=new JSZip();const prevs=[];
    for(let i=1;i<=tot;i++){
      setProg('pdf2img',5+i/tot*88,t('dynamic.common.processing',{current:i,total:tot}));
      const pg=await pdf.getPage(i);const vp=pg.getViewport({scale:sc});
      const cv=document.createElement('canvas');cv.width=vp.width;cv.height=vp.height;
      await pg.render({canvasContext:cv.getContext('2d'),viewport:vp}).promise;
      const du=cv.toDataURL('image/'+fmt,.92);
      const b64=du.split(',')[1];const bin=atob(b64);const arr=new Uint8Array(bin.length);
      for(let j=0;j<bin.length;j++)arr[j]=bin.charCodeAt(j);
      zip.file(`page_${i}.${fmt==='jpeg'?'jpg':'png'}`,arr);
      if(i<=6)prevs.push(du);
    }
    const zb=await zip.generateAsync({type:'blob'});window._p2iBlob=zb;
    setProg('pdf2img',100,t('dynamic.common.complete'));
    showRes('pdf2img',`<div class="res-card"><div class="res-info"><h4>✅ ${t('dynamic.pdf2img.result',{count:tot})}</h4></div><button class="dl-btn" onclick="dlBlob(window._p2iBlob,'pdf_images.zip')">⬇️ ZIP</button></div><div class="img-pg">${prevs.map(u=>`<img src="${u}">`).join('')}</div>`);
    showNotif(t('dynamic.pdf2img.success'),'ok');
  }catch(e){showNotif(t('dynamic.common.error',{message:e.message}),'err');console.error(e);}
  btn.disabled=false;setTimeout(()=>hideProg('pdf2img'),2000);
}

/* ══ IMAGES→PDF ══ */
async function imgsToPDF(){
  if(!FILES.img2pdf.length){showNotif(t('dynamic.validation.image',{name:''}).replace(/:\s*$/,''),'err');return;}
  const btn=document.querySelector('#panel-img2pdf .pbtn');btn.disabled=true;
  const sz=document.getElementById('i2p-sz').value,or=document.getElementById('i2p-or').value;
  setProg('img2pdf',5,t('dynamic.common.loading'));
  try{
    const pdf=await PDFLib.PDFDocument.create();
    for(let i=0;i<FILES.img2pdf.length;i++){
      setProg('img2pdf',5+i/FILES.img2pdf.length*88,t('dynamic.common.processing',{current:i+1,total:FILES.img2pdf.length}));
      const buf=await FILES.img2pdf[i].arrayBuffer();
      const mime=FILES.img2pdf[i].type;
      let img=mime==='image/png'?await pdf.embedPng(buf):await pdf.embedJpg(buf);
      const iW=img.width,iH=img.height;
      let pW=595.28,pH=841.89;
      if(sz==='letter'){pW=612;pH=792;}else if(sz==='fit'){pW=iW;pH=iH;}
      const land=or==='landscape'||(or==='auto'&&iW>iH);
      if(land&&sz!=='fit')[pW,pH]=[pH,pW];
      const page=pdf.addPage([pW,pH]);
      const m=sz==='fit'?0:16;const sc=Math.min((pW-m*2)/iW,(pH-m*2)/iH);
      page.drawImage(img,{x:(pW-iW*sc)/2,y:(pH-iH*sc)/2,width:iW*sc,height:iH*sc});
    }
    const blob=new Blob([await pdf.save()],{type:'application/pdf'});
    window._i2pBlob=blob;setProg('img2pdf',100,t('dynamic.common.complete'));
    showRes('img2pdf',`<div class="res-card"><div class="res-info"><h4>✅ ${t('dynamic.img2pdf.result',{count:FILES.img2pdf.length,size:fmtSz(blob.size)})}</h4></div><button class="dl-btn" onclick="dlBlob(window._i2pBlob,'images.pdf')">⬇️ PDF</button></div>`);
    showNotif(t('dynamic.img2pdf.success'),'ok');
  }catch(e){showNotif(t('dynamic.common.error',{message:e.message}),'err');console.error(e);}
  btn.disabled=false;setTimeout(()=>hideProg('img2pdf'),2000);
}

/* ══ GRAYSCALE ══ */
async function grayscalePDF(){
  if(!FILES.grayscale.length){showNotif(t('dynamic.validation.pdf',{name:''}).replace(/:\s*$/,''),'err');return;}
  const btn=document.querySelector('#panel-grayscale .pbtn');btn.disabled=true;
  setProg('grayscale',5,t('dynamic.common.loading'));
  try{
    const src=await pdfjsLib.getDocument({data:await FILES.grayscale[0].arrayBuffer()}).promise;
    const tot=src.numPages;const out=await PDFLib.PDFDocument.create();
    for(let i=1;i<=tot;i++){
      setProg('grayscale',5+i/tot*88,t('dynamic.common.processing',{current:i,total:tot}));
      const pg=await src.getPage(i);const vp=pg.getViewport({scale:2});
      const cv=document.createElement('canvas');cv.width=vp.width;cv.height=vp.height;
      const ctx=cv.getContext('2d');
      await pg.render({canvasContext:ctx,viewport:vp}).promise;
      const d=ctx.getImageData(0,0,cv.width,cv.height);
      for(let j=0;j<d.data.length;j+=4){const g=.299*d.data[j]+.587*d.data[j+1]+.114*d.data[j+2];d.data[j]=d.data[j+1]=d.data[j+2]=g;}
      ctx.putImageData(d,0,0);
      const b64=cv.toDataURL('image/jpeg',.92).split(',')[1];
      const bin=atob(b64);const arr=new Uint8Array(bin.length);for(let j=0;j<bin.length;j++)arr[j]=bin.charCodeAt(j);
      const em=await out.embedJpg(arr);
      const v=pg.getViewport({scale:1});const np=out.addPage([v.width,v.height]);
      np.drawImage(em,{x:0,y:0,width:v.width,height:v.height});
    }
    const blob=new Blob([await out.save()],{type:'application/pdf'});
    window._gsBlob=blob;setProg('grayscale',100,t('dynamic.common.complete'));
    showRes('grayscale',`<div class="res-card"><div class="res-info"><h4>✅ ${t('dynamic.grayscale.result',{count:tot,size:fmtSz(blob.size)})}</h4></div><button class="dl-btn" onclick="dlBlob(window._gsBlob,'grayscale.pdf')">⬇️ PDF</button></div>`);
    showNotif(t('dynamic.grayscale.success'),'ok');
  }catch(e){showNotif(t('dynamic.common.error',{message:e.message}),'err');console.error(e);}
  btn.disabled=false;setTimeout(()=>hideProg('grayscale'),2000);
}

/* ══════════════════════════════════════════════════
   A4 MULTI-PHOTO PRINT
══════════════════════════════════════════════════ */

/* Build size selector cards */
function buildSizeCards(){
  const row=document.getElementById('size-row');
  row.innerHTML='';
  const gapMM=parseFloat(document.getElementById('a4-gap')?.value||3)||3;
  const marginMM=parseFloat(document.getElementById('a4-margin')?.value||8)||8;
  Object.entries(SIZES).forEach(([key,s])=>{
    const {cols,rows}=calcGrid(s,marginMM,gapMM);
    const card=document.createElement('div');
    card.className='sc'+(key===curSzKey?' active':'');
    card.id='szc-'+key;
    card.innerHTML=`<div class="sc-badge">${t('dynamic.a4.badges.'+key)}</div>
      <div class="sc-dim">${s.label}</div>
      <div class="sc-cnt">${t('dynamic.a4.photosPerA4',{count:cols*rows})}</div>`;
    card.onclick=()=>{curSzKey=key;buildSizeCards();updateA4Preview();};
    row.appendChild(card);
  });
}

function calcGrid(s,marginMM,gapMM){
  const pw=s.wCm*10,ph=s.hCm*10;
  const cols=Math.max(1,Math.floor((210-marginMM*2+gapMM)/(pw+gapMM)));
  const rows=Math.max(1,Math.floor((297-marginMM*2+gapMM)/(ph+gapMM)));
  return{cols,rows};
}

/* Photo upload area drag/drop */
function puaDrag(e){e.preventDefault();document.getElementById('pua').classList.add('over');}
function puaDrop(e){
  e.preventDefault();document.getElementById('pua').classList.remove('over');
  if(e.dataTransfer.files.length)addPhotos({target:{files:e.dataTransfer.files},_drop:true});
}

function addPhotos(e){
  const newF=e.target.files||e._files;
  Array.from(newF).forEach(f=>{
    if(!f.type.startsWith('image/')){showNotif(t('dynamic.validation.image',{name:f.name}),'err');return;}
    const item={file:f,img:null,id:uid()};
    const url=URL.createObjectURL(f);
    const im=new Image();
    im.onload=()=>{item.img=im;URL.revokeObjectURL(url);renderPhotoGrid();updateA4Preview();};
    im.src=url;
    photoItems.push(item);
  });
  e.target.value='';
  renderPhotoGrid();
}

function removePhoto(id){
  photoItems=photoItems.filter(x=>x.id!==id);
  renderPhotoGrid();updateA4Preview();
}

/* Render thumbnail grid with drag-to-reorder */
function renderPhotoGrid(){
  const grid=document.getElementById('photos-grid');
  const hint=document.getElementById('drag-hint');
  if(!photoItems.length){grid.style.display='none';hint.style.display='none';return;}
  grid.style.display='grid';
  if(photoItems.length>1)hint.style.display='block';
  grid.innerHTML='';

  photoItems.forEach((item,i)=>{
    const card=document.createElement('div');
    card.className='photo-thumb-card';
    card.draggable=true;
    card.dataset.idx=i;

    // Number badge
    const num=document.createElement('div');num.className='ptc-num';num.textContent=i+1;card.appendChild(num);

    // Remove btn
    const rm=document.createElement('button');rm.className='ptc-rm';rm.textContent='✕';
    rm.onclick=(e)=>{e.stopPropagation();removePhoto(item.id);};card.appendChild(rm);

    if(item.img){
      const img=document.createElement('img');img.className='ptc-img';
      // cover-crop thumbnail to size ratio
      const s=SIZES[curSzKey];
      const ratio=s.wCm/s.hCm;
      const tW=110,tH=Math.round(tW/ratio);
      const cv=document.createElement('canvas');cv.width=tW;cv.height=tH;
      const ctx=cv.getContext('2d');
      const sr=item.img.naturalWidth/item.img.naturalHeight;
      let sx=0,sy=0,sw=item.img.naturalWidth,sh=item.img.naturalHeight;
      if(sr>ratio){sw=Math.round(sh*ratio);sx=Math.round((item.img.naturalWidth-sw)/2);}
      else{sh=Math.round(sw/ratio);sy=Math.round((item.img.naturalHeight-sh)/2);}
      ctx.drawImage(item.img,sx,sy,sw,sh,0,0,tW,tH);
      img.src=cv.toDataURL();img.className='ptc-img';
      card.appendChild(img);
    }

    const info=document.createElement('div');info.className='ptc-info';
    info.textContent=item.file.name.length>14?item.file.name.slice(0,12)+'…':item.file.name;
    card.appendChild(info);

    // Drag events for reorder
    card.ondragstart=e=>{dragSrcIdx=i;e.dataTransfer.effectAllowed='move';card.classList.add('dragging');};
    card.ondragend=()=>{card.classList.remove('dragging');document.querySelectorAll('.photo-thumb-card').forEach(c=>c.classList.remove('drag-over-card'));};
    card.ondragover=e=>{e.preventDefault();e.dataTransfer.dropEffect='move';};
    card.ondragenter=()=>{if(dragSrcIdx!==i)card.classList.add('drag-over-card');};
    card.ondragleave=()=>card.classList.remove('drag-over-card');
    card.ondrop=e=>{
      e.preventDefault();e.stopPropagation();
      if(dragSrcIdx===null||dragSrcIdx===i)return;
      const moved=photoItems.splice(dragSrcIdx,1)[0];
      photoItems.splice(i,0,moved);
      dragSrcIdx=null;
      renderPhotoGrid();updateA4Preview();
    };
    grid.appendChild(card);
  });

  // Add more button
  const addBtn=document.createElement('div');addBtn.className='add-more-btn';
  const addInp=document.createElement('input');addInp.type='file';addInp.accept='image/*';addInp.multiple=true;
  addInp.onchange=addPhotos;
  addBtn.innerHTML=`<span class="add-more-icon">➕</span><span>${t('dynamic.a4.addImages')}</span>`;
  addBtn.appendChild(addInp);
  grid.appendChild(addBtn);
}

/* Draw A4 preview canvas */
function updateA4Preview(){
  if(!photoItems.length||!photoItems.some(x=>x.img)){
    document.getElementById('a4-preview-section').style.display='none';return;
  }
  const s=SIZES[curSzKey];
  const marginMM=Math.max(0,parseFloat(document.getElementById('a4-margin').value)||8);
  const gapMM=Math.max(0,parseFloat(document.getElementById('a4-gap').value)||3);
  const cutLines=document.getElementById('a4-cut').value==='yes';
  const pagesOpt=document.getElementById('a4-pages').value;

  const {cols,rows}=calcGrid(s,marginMM,gapMM);
  const perPage=cols*rows;
  const photoW=s.wCm*10,photoH=s.hCm*10;
  const photoRatio=s.wCm/s.hCm;

  // How many photos to place total
  const readyPhotos=photoItems.filter(x=>x.img);
  let totalSlots;
  if(pagesOpt==='1')totalSlots=perPage;
  else if(pagesOpt==='2')totalSlots=perPage*2;
  else totalSlots=readyPhotos.length; // 'all': place each photo exactly once (may span pages)

  // Stats
  document.getElementById('st-size').innerHTML=`${s.label} <small>cm</small>`;
  document.getElementById('st-placed').innerHTML=`${Math.min(totalSlots,readyPhotos.length)} <small>${t('dynamic.a4.photos')}</small>`;
  document.getElementById('st-grid').innerHTML=`${cols} × ${rows}`;
  const numPages=pagesOpt==='all'?Math.ceil(readyPhotos.length/perPage):(pagesOpt==='2'?2:1);
  document.getElementById('st-pages').innerHTML=`${numPages} <small>${t('dynamic.a4.pages')}</small>`;

  // Draw first page preview
  const MM=2.8;
  const cW=210*MM,cH=297*MM;
  const cv=document.getElementById('a4-cv');
  cv.width=cW;cv.height=cH;
  const ctx=cv.getContext('2d');
  ctx.fillStyle='#fff';ctx.fillRect(0,0,cW,cH);

  let idx=0;
  for(let r=0;r<rows&&idx<perPage&&idx<readyPhotos.length;r++){
    for(let c=0;c<cols&&idx<perPage&&idx<readyPhotos.length;c++){
      const x=(marginMM+c*(photoW+gapMM))*MM;
      const y=(marginMM+r*(photoH+gapMM))*MM;
      const pw=photoW*MM,ph=photoH*MM;
      const item=readyPhotos[idx];
      if(item&&item.img){
        ctx.save();ctx.beginPath();ctx.rect(x,y,pw,ph);ctx.clip();
        const sr=item.img.naturalWidth/item.img.naturalHeight;
        let sx=0,sy=0,sw=item.img.naturalWidth,sh=item.img.naturalHeight;
        if(sr>photoRatio){sw=Math.round(sh*photoRatio);sx=Math.round((item.img.naturalWidth-sw)/2);}
        else{sh=Math.round(sw/photoRatio);sy=Math.round((item.img.naturalHeight-sh)/2);}
        ctx.drawImage(item.img,sx,sy,sw,sh,x,y,pw,ph);
        ctx.restore();
      }
      if(cutLines){
        ctx.strokeStyle='rgba(150,150,150,.65)';ctx.lineWidth=.5;
        ctx.setLineDash([2,2]);ctx.strokeRect(x,y,pw,ph);ctx.setLineDash([]);
      }
      idx++;
    }
  }
  // Remaining slots (no more photos) — show dashed empty
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const slotIdx=r*cols+c;
      if(slotIdx<readyPhotos.length)continue;
      if(slotIdx>=perPage)continue;
      const x=(marginMM+c*(photoW+gapMM))*MM;
      const y=(marginMM+r*(photoH+gapMM))*MM;
      const pw=photoW*MM,ph=photoH*MM;
      ctx.strokeStyle='rgba(200,200,200,.5)';ctx.lineWidth=.5;
      ctx.setLineDash([2,3]);ctx.strokeRect(x,y,pw,ph);ctx.setLineDash([]);
    }
  }
  ctx.strokeStyle='#ddd';ctx.lineWidth=1;ctx.strokeRect(.5,.5,cW-1,cH-1);

  document.getElementById('a4-preview-section').style.display='block';
  buildSizeCards();
}

/* Generate final PDF */
async function a4PrintPDF(){
  const readyPhotos=photoItems.filter(x=>x.img);
  if(!readyPhotos.length){showNotif(t('dynamic.a4.minimum'),'err');return;}
  const btn=document.querySelector('#panel-a4print .pbtn');btn.disabled=true;

  const s=SIZES[curSzKey];
  const marginMM=Math.max(0,parseFloat(document.getElementById('a4-margin').value)||8);
  const gapMM=Math.max(0,parseFloat(document.getElementById('a4-gap').value)||3);
  const cutLines=document.getElementById('a4-cut').value==='yes';
  const pagesOpt=document.getElementById('a4-pages').value;

  const {cols,rows}=calcGrid(s,marginMM,gapMM);
  const perPage=cols*rows;
  const photoRatio=s.wCm/s.hCm;

  const mmToPt=72/25.4;
  const A4W=210*mmToPt,A4H=297*mmToPt;
  const photoW_pt=s.wCm*10*mmToPt,photoH_pt=s.hCm*10*mmToPt;
  const marginPt=marginMM*mmToPt,gapPt=gapMM*mmToPt;
  const cutColor=PDFLib.rgb(.65,.65,.65);

  // Determine which photos go on which page
  let schedule=[]; // [{photoIdx, page}]
  if(pagesOpt==='all'){
    readyPhotos.forEach((p,i)=>schedule.push({photo:p,page:Math.floor(i/perPage),slot:i%perPage}));
  } else {
    const numPages=pagesOpt==='2'?2:1;
    for(let pg=0;pg<numPages;pg++){
      for(let sl=0;sl<perPage;sl++){
        const photoIdx=(pg*perPage+sl)%readyPhotos.length;
        schedule.push({photo:readyPhotos[photoIdx],page:pg,slot:sl});
      }
    }
  }

  const numPages=schedule.length?schedule[schedule.length-1].page+1:1;
  setProg('a4print',5,t('dynamic.a4.preparing'));

  try{
    // Pre-render all unique photos to JPEG bytes at 300 DPI
    const DPI=300;
    const pxW=Math.round(s.wCm/2.54*DPI);
    const pxH=Math.round(s.hCm/2.54*DPI);

    const photoCache=new Map();
    const uniquePhotos=[...new Set(schedule.map(x=>x.photo))];
    for(let i=0;i<uniquePhotos.length;i++){
      setProg('a4print',5+i/uniquePhotos.length*55,t('dynamic.a4.processing',{current:i+1,total:uniquePhotos.length}));
      const item=uniquePhotos[i];
      if(photoCache.has(item.id))continue;
      const cv=document.createElement('canvas');cv.width=pxW;cv.height=pxH;
      const ctx=cv.getContext('2d');
      const sr=item.img.naturalWidth/item.img.naturalHeight;
      let sx=0,sy=0,sw=item.img.naturalWidth,sh=item.img.naturalHeight;
      if(sr>photoRatio){sw=Math.round(sh*photoRatio);sx=Math.round((item.img.naturalWidth-sw)/2);}
      else{sh=Math.round(sw/photoRatio);sy=Math.round((item.img.naturalHeight-sh)/2);}
      ctx.drawImage(item.img,sx,sy,sw,sh,0,0,pxW,pxH);
      const b64=cv.toDataURL('image/jpeg',.95).split(',')[1];
      const bin=atob(b64);const arr=new Uint8Array(bin.length);
      for(let j=0;j<bin.length;j++)arr[j]=bin.charCodeAt(j);
      photoCache.set(item.id,arr);
    }

    setProg('a4print',62,t('dynamic.a4.creating'));
    const pdf=await PDFLib.PDFDocument.create();
    const pages=[];
    for(let pg=0;pg<numPages;pg++)pages.push(pdf.addPage([A4W,A4H]));

    // Embed all unique images
    const embedCache=new Map();
    for(const[id,bytes]of photoCache){
      embedCache.set(id,await pdf.embedJpg(bytes));
    }

    setProg('a4print',78,t('dynamic.a4.placing'));
    let placed=0;
    for(const {photo,page,slot} of schedule){
      const pg=pages[page];
      const col=slot%cols,row=Math.floor(slot/cols);
      const x=marginPt+col*(photoW_pt+gapPt);
      const y=A4H-marginPt-(row+1)*photoH_pt-row*gapPt;
      const emb=embedCache.get(photo.id);
      if(emb)pg.drawImage(emb,{x,y,width:photoW_pt,height:photoH_pt});
      if(cutLines){
        const da=[2.5,2.5],th=.35;
        pg.drawLine({start:{x,y:y+photoH_pt},end:{x:x+photoW_pt,y:y+photoH_pt},thickness:th,color:cutColor,dashArray:da});
        pg.drawLine({start:{x,y},end:{x:x+photoW_pt,y},thickness:th,color:cutColor,dashArray:da});
        pg.drawLine({start:{x,y},end:{x,y:y+photoH_pt},thickness:th,color:cutColor,dashArray:da});
        pg.drawLine({start:{x:x+photoW_pt,y},end:{x:x+photoW_pt,y:y+photoH_pt},thickness:th,color:cutColor,dashArray:da});
      }
      placed++;
    }

    setProg('a4print',93,t('dynamic.common.saving'));
    const blob=new Blob([await pdf.save()],{type:'application/pdf'});
    window._a4Blob=blob;
    setProg('a4print',100,t('dynamic.common.complete'));
    showRes('a4print',`<div class="res-card"><div class="res-info">
      <h4>✅ ${t('dynamic.a4.success')}</h4>
      <p>${t('dynamic.a4.result',{count:placed,sizeLabel:s.label,pages:numPages,size:fmtSz(blob.size)})}</p>
    </div><button class="dl-btn" onclick="dlBlob(window._a4Blob,'id_photos_a4.pdf')">⬇️ ${t('dynamic.common.download')} PDF</button></div>`);
    showNotif(t('dynamic.a4.success'),'ok');
  }catch(e){showNotif(t('dynamic.common.error',{message:e.message}),'err');console.error(e);}
  btn.disabled=false;setTimeout(()=>hideProg('a4print'),2000);
}

/* ══════════════════════════════════════════════════
   PDF COMPRESS
══════════════════════════════════════════════════ */
function setCL(lvl){
  compressLevel=lvl;
  document.querySelectorAll('.cl').forEach(c=>c.classList.remove('active'));
  document.getElementById('cl-'+lvl).classList.add('active');
  if(FILES.compress.length)showCompressInfo();
}

function showCompressInfo(){
  const f=FILES.compress[0];if(!f)return;
  const cfg=CL_CFG[compressLevel];
  const orig=f.size;
  // Rough estimate: each page rasterized at scale then JPEG compressed
  const estRatio=compressLevel==='low'?.70:compressLevel==='med'?.45:compressLevel==='high'?.28:.18;
  const estSize=Math.round(orig*estRatio);
  document.getElementById('ci-orig').textContent=fmtSz(orig);
  document.getElementById('ci-est').textContent='~'+fmtSz(estSize);
  document.getElementById('compress-info').style.display='block';
}

async function compressPDF(){
  if(!FILES.compress.length){showNotif(t('dynamic.validation.pdf',{name:''}).replace(/:\s*$/,''),'err');return;}
  const btn=document.querySelector('#panel-compress .pbtn');btn.disabled=true;
  const cfg=CL_CFG[compressLevel];
  setProg('compress',5,t('dynamic.compress.loading'));
  const origSize=FILES.compress[0].size;
  try{
    const srcPDF=await pdfjsLib.getDocument({data:await FILES.compress[0].arrayBuffer()}).promise;
    const tot=srcPDF.numPages;
    const outPDF=await PDFLib.PDFDocument.create();

    for(let i=1;i<=tot;i++){
      setProg('compress',5+i/tot*88,t('dynamic.compress.processing',{current:i,total:tot}));
      const pg=await srcPDF.getPage(i);
      const vp=pg.getViewport({scale:cfg.scale});
      const cv=document.createElement('canvas');
      cv.width=Math.round(vp.width);cv.height=Math.round(vp.height);
      const ctx=cv.getContext('2d');
      await pg.render({canvasContext:ctx,viewport:vp}).promise;
      // Convert to JPEG at chosen quality
      const b64=cv.toDataURL('image/jpeg',cfg.q).split(',')[1];
      const bin=atob(b64);const arr=new Uint8Array(bin.length);
      for(let j=0;j<bin.length;j++)arr[j]=bin.charCodeAt(j);
      const emb=await outPDF.embedJpg(arr);
      // Use original page dimensions (pt)
      const origVp=pg.getViewport({scale:1});
      const np=outPDF.addPage([origVp.width,origVp.height]);
      np.drawImage(emb,{x:0,y:0,width:origVp.width,height:origVp.height});
    }

    setProg('compress',96,t('dynamic.common.saving'));
    const bytes=await outPDF.save();
    const blob=new Blob([bytes],{type:'application/pdf'});
    window._cBlob=blob;
    const saved=origSize-blob.size;
    const pct=Math.max(0,Math.round(saved/origSize*100));
    setProg('compress',100,t('dynamic.common.complete'));
    showRes('compress',`<div class="res-card"><div class="res-info">
      <h4>✅ ${t('dynamic.compress.success')}</h4>
      <p>${t('dynamic.compress.result',{original:fmtSz(origSize),compressed:fmtSz(blob.size),detail:saved>0?t('dynamic.compress.saved',{percent:pct}):t('dynamic.compress.alreadySmall')})}</p>
    </div><button class="dl-btn" onclick="dlBlob(window._cBlob,'compressed.pdf')">⬇️ ${t('dynamic.common.download')}</button></div>`);
    showNotif(t('dynamic.compress.success'),'ok');
  }catch(e){showNotif(t('dynamic.common.error',{message:e.message}),'err');console.error(e);}
  btn.disabled=false;setTimeout(()=>hideProg('compress'),2000);
}

/* ══ INIT ══ */
buildSizeCards();
setLanguage(localStorage.getItem('pdfBySinghaLanguage'));
openTool('merge');
