import React from 'react';
import Header from '../component/Header';
import './Noodle.css';
import Footer from '../component/Footer';

class Noodle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            soup : "น้ำ",
            line : "",
            size : "-",
            veg : ["-"],
            meat : ["-"],
            num : 0,
            price : 0
        };
    }
    chageSoup = () => {
        let sw = document.getElementById("switch").checked;
        if (sw !== true) {
            this.setState({soup : "น้ำ"});
        }else{
            this.setState({soup : "แห้ง"});
        }
    };
    chageLine = () => {
        let ln = document.getElementById("selects");
        this.setState({line : ln.value});
        if (ln.value === "เส้นเล็ก") {
            document.getElementById("op1").classList.add("bolder");
        }else{
            document.getElementById("op1").classList.remove("bolder");
        }
        if (ln.value === "เส้นหมี่") {
            document.getElementById("op2").classList.add("bolder");
        }else{
            document.getElementById("op2").classList.remove("bolder");
        }
        if (ln.value === "บะหมี่ไข่") {
            document.getElementById("op3").classList.add("bolder");
        }else{
            document.getElementById("op3").classList.remove("bolder");
        }
        if (ln.value === "บะหมี่หยก") {
            document.getElementById("op4").classList.add("bolder");
        }else{
            document.getElementById("op4").classList.remove("bolder");
        }
        if (ln.value === "วุ้นเส้น") {
            document.getElementById("op5").classList.add("bolder");
        }else{
            document.getElementById("op5").classList.remove("bolder");
        }
        if (ln.value === "เส้นใหญ่") {
            document.getElementById("op6").classList.add("bolder");
        }else{
            document.getElementById("op6").classList.remove("bolder");
        }
        if (ln.value === "มาม่า") {
            document.getElementById("op7").classList.add("bolder");
        }else{
            document.getElementById("op7").classList.remove("bolder");
        }
    };
    chageVeg = () => {
        let vegs = [];
        let v1 = document.getElementById("vegs1");
        let v2 = document.getElementById("vegs2");
        let v3 = document.getElementById("vegs3");
        let v4 = document.getElementById("vegs4");
        if (v1.checked) {
            vegs.push(" ผักกาดขาว ");
            document.getElementById("veg1").classList.add("bolder");
        }else{
            document.getElementById("veg1").classList.remove("bolder");
        }
        if(v2.checked) {
            vegs.push(" ผักบุ้ง ");
            document.getElementById("veg2").classList.add("bolder");
        }else{
            document.getElementById("veg2").classList.remove("bolder");
        }
        if(v3.checked) {
            vegs.push(" ถั่วงอก ");
            document.getElementById("veg3").classList.add("bolder");
        }else{
            document.getElementById("veg3").classList.remove("bolder");
        }
        if(v4.checked) {
            vegs.push(" คะน้า ");
            document.getElementById("veg4").classList.add("bolder");
        }else{
            document.getElementById("veg4").classList.remove("bolder");
        }
        this.setState({veg : vegs})
    };
    chageMeat = (e) => {
        let meats = [];
        let m1 = document.getElementById("meat1");
        let m2 = document.getElementById("meat2");
        let m3 = document.getElementById("meat3");
        let m4 = document.getElementById("meat4");
        let m5 = document.getElementById("meat5");
        let m6 = document.getElementById("meat6");
        let m7 = document.getElementById("meat7");
        let m8 = document.getElementById("meat8");
        if (m1.checked) {
            meats.push(" ลูกชิ้นเนื้อ ");
            document.getElementById("meats1").classList.add("bolder");
        }else{
            document.getElementById("meats1").classList.remove("bolder");
        }
        if (m2.checked) {
            meats.push(" เนื้อสด ");
            document.getElementById("meats2").classList.add("bolder");
        }else{
            document.getElementById("meats2").classList.remove("bolder");
        }
        if (m3.checked) {
            meats.push(" เนื้อเปื่อย ");
            document.getElementById("meats3").classList.add("bolder");
        }else{
            document.getElementById("meats3").classList.remove("bolder");
        }
        if (m4.checked) {
            meats.push(" ลูกชิ้นหมู ");
            document.getElementById("meats4").classList.add("bolder");
        }else{
            document.getElementById("meats5").classList.remove("bolder");
        }
        if (m5.checked) {
            meats.push(" หมูสด ");
            document.getElementById("meats5").classList.add("bolder");
        }else{
            document.getElementById("meats5").classList.remove("bolder");
        }
        if (m6.checked) {
            meats.push(" หมูตุ๋น ");
            document.getElementById("meats6").classList.add("bolder");
        }else{
            document.getElementById("meats6").classList.remove("bolder");
        }
        if (m7.checked) {
            meats.push(" หมูสับ ");
            document.getElementById("meats7").classList.add("bolder");
        }else{
            document.getElementById("meats7").classList.remove("bolder");
        }
        if (m8.checked) {
            meats.push(" เครื่องใน (ตับ ปอด ไส้) ");
            document.getElementById("meats8").classList.add("bolder");
        }else{
            document.getElementById("meats8").classList.remove("bolder");
        }
        this.setState({meat : meats});
    };
    chageNum = () => {
        let num = document.getElementById("num").value;
        this.setState({num : num});
    };
    onClickSubmit = (e) => {
        e.preventDefault();
        let total = 0;
        total = this.state.num * this.state.price;
        let div = document.createElement("div");
        let detail = document.createElement("p");
        let ok = document.createElement("button");
        let alt = document.getElementById("alert");
        let title = document.createElement("div");
        div.classList.add("alerts");
        ok.classList.add("ok");
        detail.classList.add("detail");
        title.classList.add("title");
        title.innerHTML = "<h4>Alert<h4/>";
        e.target.disabled = true;
        if (this.state.line !== "" && this.state.num !== 0 && this.state.price !== 0) {
            detail.innerHTML = `<p>ขอบคุณที่มาอุดหนุนค่ะ/ครับ</br> คุณต้องชำระเงิน ${total} บาท</p>`;
            ok.type = "button"
            ok.textContent = "OK";
            ok.addEventListener("click",()=>{
                div.remove();
                window.location.reload(false);
            });
            div.append(title,detail,ok);
            alt.append(div);
        }else{
            alert("Please!!!, Choose Noodle line or Enter Num of noodle or Noodle Size.")
        }
    };
    chageOption = (changeEvent) => {
        this.setState({size : changeEvent.target.value});
        if (changeEvent.target.value === "ธรรมดา") {
            this.setState({price : 40});
            document.getElementById("sizes1").classList.add("bolder");
        }else{
            document.getElementById("sizes1").classList.remove("bolder");
        }
        if (changeEvent.target.value === "พิเศษ") {
            this.setState({price : 50});
            document.getElementById("sizes2").classList.add("bolder");
        }else{
            document.getElementById("sizes2").classList.remove("bolder");
        }
        if (changeEvent.target.value === "จุก") {
            this.setState({price : 60});
            document.getElementById("sizes3").classList.add("bolder");
        }else{
            document.getElementById("sizes3").classList.remove("bolder");
        }
        if (changeEvent.target.value === "ล้มยักษ์"){
            this.setState({price : 100});
            document.getElementById("sizes14").classList.add("bolder");
        }else{
            document.getElementById("sizes4").classList.remove("bolder");
        }
    };
    removeDuplicateStrings(array){
        return [...new Set(array)]
    }
    render() { 
        let {soup,line,veg,meat,size,num} = this.state;
        
        return (
            <div class="body">
                <Header />
                <div class="contain">
                    <div id='alert'></div>
                    <div id ="menu">
                        <p>ท่านกำลังจะสั่ง ก๋วยเตี๋ยว{soup} {line} ผัก({this.removeDuplicateStrings(veg)}) เนื้อสัตว์({this.removeDuplicateStrings(meat)}) <br/>ขนาด({size}) จำนวน {num} ชาม</p>
                    </div>
                    <form>
                        <div class="form-group">
                            <div class="form-check form-switch water">
                                <label class="form-check-label mt-2" for="flexSwitchCheckDefault" id="soup">น้ำ / แห้ง</label>
                                <input class="form-check-input" type="checkbox" id="switch" name='soup' onClick={this.chageSoup}/>
                            </div>
                        </div>
                        <div class="form-group line">
                            <label for="exampleSelect2" class="form-label mt-4" id='line'>เลือกเส้น</label>
                            <select class="form-select" id="selects" name='line' onClick={this.chageLine}>
                                <option selected value="เส้นเล็ก" id='op1'>เส้นเล็ก</option>
                                <option value="เส้นหมี่" id='op2'>เส้นหมี่</option>
                                <option value="บะหมี่ไข่" id='op3'>บะหมี่ไข่</option>
                                <option value="บะหมี่หยก" id='op4'>บะหมี่หยก</option>
                                <option value="วุ้นเส้น" id='op5'>วุ้นเส้น</option>
                                <option value="เส้นใหญ่" id='op6'>เส้นใหญ่</option>
                                <option value="มาม่า" id='op7'>มาม่า</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <div class="vegs">
                                <h6>เลือกผัก</h6>
                                <input class="form-check-input" type="checkbox" id="vegs1" value="ผักกาดขาว" name='vegs1' onClick={this.chageVeg}/>
                                <label class="form-check-label" for="veg1" id="veg1">ผักกาดขาว</label>
                                <input class="form-check-input" type="checkbox" id="vegs2" value="ผักบุ้ง" name='vegs2' onClick={this.chageVeg}/>
                                <label class="form-check-label" for="veg2" id='veg2'>ผักบุ้ง</label>
                                <input class="form-check-input" type="checkbox" id="vegs3" value="ถั่วงอก" name='vegs3' onClick={this.chageVeg}/>
                                <label class="form-check-label" for="veg3" id='veg3'>ถั่วงอก</label>
                                <input class="form-check-input" type="checkbox" id="vegs4" value="คะน้า" name='vegs4' onClick={this.chageVeg}/>
                                <label class="form-check-label" for="veg4" id='veg4'>คะน้า</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="meat">
                                <h6>เลือกเนื้อสัตว์</h6>
                                <input class="form-check-input" type="checkbox" id="meat1" onClick={this.chageMeat}/>
                                <label class="form-check-label" for="meat1" id="meats1">ลูกชิ้นเนื้อ</label>
                                <input class="form-check-input" type="checkbox" id="meat2" onClick={this.chageMeat}/>
                                <label class="form-check-label" for="meat2" id="meats2">เนื้อสด</label>
                                <input class="form-check-input" type="checkbox" id="meat3" onClick={this.chageMeat}/>
                                <label class="form-check-label" for="meat3" id="meats3">เนื้อเปื่อย</label>
                                <div>
                                    <input class="form-check-input" type="checkbox" id="meat4" onClick={this.chageMeat}/>
                                    <label class="form-check-label" for="meat4" id="meats4">ลูกชิ้นหมู</label>
                                    <input class="form-check-input" type="checkbox" id="meat5" onClick={this.chageMeat}/>
                                    <label class="form-check-label" for="meat5" id="meats5">หมูสด</label>
                                    <input class="form-check-input" type="checkbox" id="meat6" onClick={this.chageMeat}/>
                                    <label class="form-check-label" for="meat6" id="meats6">หมูตุ๋น</label>
                                    <input class="form-check-input" type="checkbox" id="meat7" onClick={this.chageMeat}/>
                                    <label class="form-check-label" for="meat7" id="meats7">หมูสับ</label>
                                    <input class="form-check-input" type="checkbox" id="meat8" onClick={this.chageMeat}/>
                                    <label class="form-check-label" for="meat8" id="meats8">เครื่องใน (ตับ ปอด ไส้)</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="sizes">
                                <h6>อิ่มไหนดี? (ขนาด)</h6>
                                <input class="form-check-input" type="radio" name="op1" id="size1" value="ธรรมดา" checked={this.state.size === "ธรรมดา"} onChange={this.chageOption}/>
                                <label class="form-check-label"  id="sizes1">ธรรมดา (40 บาท)</label>
                                <input class="form-check-input" type="radio" name="op2" id="size2" value="พิเศษ" checked={this.state.size === "พิเศษ"} onChange={this.chageOption}/>
                                <label class="form-check-label"  id='sizes2'>พิเศษ (50 บาท)</label>
                                <input class="form-check-input" type="radio" name="op3" id="size3" value="จุก" checked={this.state.size === "จุก"} onChange={this.chageOption}/>
                                <label class="form-check-label"  id='sizes3'>จุก (60 บาท)</label>
                                <input class="form-check-input" type="radio" name="op4" id="size4" value="ล้มยักษ์" checked={this.state.size === "ล้มยักษ์"} onChange={this.chageOption}/>
                                <label class="form-check-label"  id='sizes4'>ล้มยักษ์ (100 บาท)</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="num">
                                <h6>จำนวน (ชาม)</h6>
                                <input class="form-check-input" type="number" id='num' name='num' onBlur={this.chageNum} min="0"/>    
                            </div>
                        </div>
                    </form>
                    <div class="d-grid gap-2">
                        <button class="btn btn-lg btn-primary" type="submit" id='btn' onClick={this.onClickSubmit}>ชำระเงิน</button>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
export default Noodle;
