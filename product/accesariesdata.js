import img from "../accessary_images/mouse.webp";
import img1 from "../accessary_images/keyboard.webp";
import img2 from "../accessary_images/adapter.webp";
import img3 from "../accessary_images/chager.jpg";
import img4 from "../accessary_images/mac-adapter.jpg";
import img5 from "../accessary_images/headphones.jpg";
import img6 from "../accessary_images/flash.jpg";
import img7 from "../accessary_images/CPU.png";
import img8 from "../accessary_images/mouse-pad.jpg";
import img9 from "../accessary_images/fan.jpg";
import img10 from "../accessary_images/hdmi.jpg";
import img11 from "../accessary_images/monitor-hood.jpg";
import img12 from "../accessary_images/monitor-stand.webp";
import img13 from "../accessary_images/monitor-bag.webp";
import img14 from "../accessary_images/webcam.jpg";
import img15 from "../accessary_images/flex-stand.jpg";


const AccessoriesData = [

    {
        "id": 1,
        "name": "Razer",
        "price": 5,
        "description": "Razer Basilisk V3 Pro RGB Siyah Kablosuz Gaming Mouse RZ01-04620100-R3G1",
        "discount": false,
        "discountAmount": 0,
        "type": "Mouse",
        "brand": "none",
        "image": img,
    },
    {
        "id": 2,
        "name": "Mechanical touch keyboard",
        "price": 25,
        "description": "RGB K16 RGB LED Rainbow Backlight Multimedia 87key USB Wired Gaming Keyboard For PC Laptop Game Lovers Keycap Keyboard",
        "discount": false,
        "discountAmount": 0,
        "type": "Keyboard",
        "brand": "none",
        "image": img1,
    },
    {
        "id": 3,
        "name": "Asus adapter",
        "price": 15,
        "description": "Asus AC65-00 65W Type-C Black Laptop Adapter",
        "discount": false,
        "discountAmount": 0,
        "type": "Adapter",
        "brand": "none",
        "image": img2,
    },
    {
        "id": 4,
        "name": "Macbook Charger",
        "price": 28,
        "description": "SiliconV 60W Mac Pro Charger,Replacement for 60W T-Tip Power Adapter Compatible with Mac Book Charger/Mac Book air (Late 2012-2017)",
        "discount": true,
        "discountAmount": 10,
        "type": "Charger",
        "brand": "none",
        "image": img3,
    },
    {
        "id": 5,
        "name": "AdapterMacbook Charger",
        "price": 20,
        "description": "USB C SD Card Reader, CF Card Reader 3-Slot Memory Card Adapter for Type-C Device Supports Compact Flash Card TF Card Compatible with MacBook Pro/Air M1 M2 iPad Pro Android Galaxy S21 S22 S23(White)",
        "discount": true,
        "discountAmount": 15,
        "type": "Adapter",
        "brand": "none",
        "image": img4,
    },
    {
        "id": 6,
        "name": "Apple Headphone",
        "price": 89,
        "description": "Just when you thought Apple might exit 2020 with a fizzle, they unveiled AirPods Max, their new flagship over-ear & noise-cancelling headphones.",
        "discount": false,
        "discountAmount": 0,
        "type": "Headphone",
        "brand": "none",
        "image": img5,
    },
    {
        "id": 7,
        "name": "USB Flash Drives",
        "price": 5.89,
        "description": "Smartphone Pen Drive Micro USB Portable Storage Memory Metal USB Stick Free",
        "discount": false,
        "discountAmount": 0,
        "type": "Keyboard",
        "brand": "none",
        "image": img6,
    },
    {
        "id": 8,
        "name": "CPU",
        "price": 49.99,
        "description": "14 Nanometer, Accelerated processing unit, pentium Dualcore, integrated circuit, hard Disk, computer Accessories, skylake, computer Screen, intel Core I3, computer Logo, central Processing Unit, multicore Processor",
        "discount": true,
        "discountAmount": 10,
        "type": "Keyboard",
        "brand": "none",
        "image": img7,
    },
    {
        "id": 9,
        "name": "LÅNESPELARE gaming mouse pad ",
        "price": 6.99,
        "description": "LÅNESPELARE gaming mouse pad patterned 36x44 cm | IKEA Eesti",
        "discount": false,
        "discountAmount": 0,
        "type": "Mouse Pad",
        "brand": "none",
        "image": img8,
    },
    {
        "id": 10,
        "name": "Laptop Cooling Pad",
        "price": 25,
        "description": "THYIA02B ERGO 2-Fan Gaming Laptop Cooling Pad with Mobile Holder, RGB",
        "discount": false,
        "discountAmount": 0,
        "type": "Laptop Fan",
        "brand": "none",
        "image": img9,
    },
    {
        "id": 11,
        "name": "Computer HDMI",
        "price": 39.99,
        "description": "FrndzMart Hdmi Cable,hdmi cable for laptop to tv, Hdmi cable (3m, Black)",
        "discount": false,
        "discountAmount": 0,
        "type": "HDMI",
        "brand": "none",
        "image": img10,
    },
    {
        "id": 12,
        "name": "LCD Monitor Hood",
        "price": 59.99,
        "description": "The 32 LCD Monitor Hood from NEC is a hood for select NEC 32 PA series monitors. The hood reduces screen glare from ambient light, and includes a door to allow access for hanging a calibration device.",
        "discount": true,
        "discountAmount": 25,
        "type": "Monitor Hood",
        "brand": "none",
        "image": img11,
    },
    {
        "id": 13,
        "name": "Clarity Fold Stand for Clarity Pro Touch",
        "price": 99.99,
        "description": "Clarity Fold Stand transforms your Clarity Pro Touch* into an ergonomic, ultra-high-definition tablet for sketching out your latest idea, marking up a document or making music. When it’s time to answer some emails or watch a video, it folds back up into a traditional display in seconds. ",
        "discount": true,
        "discountAmount": 15,
        "type": "Stand",
        "brand": "none",
        "image": img12,
    },
    {
        "id": 14,
        "name": "Proaim Cube Monitor Bag ",
        "price": 25,
        "description": "Proaim Cube Monitor Bag (Grey) for 5 to 7 Camera LCD Monitors & Small Accessories",
        "discount": false,
        "discountAmount": 0,
        "type": "Monior Bag",
        "brand": "none",
        "image": img13,
    },
    {
        "id": 15,
        "name": "iLive 720p HD Webcam with Microphone",
        "price": 29.99,
        "description": "Improve your home office with this high-quality web cam for your laptop or computer. The 720p HD resolution gives you a clear picture, while the built-in microphone lets you speak with friends, family and colleagues.",
        "discount": false,
        "discountAmount": 0,
        "type": "Webcam",
        "brand": "none",
        "image": img14,
    },
    {
        "id": 16,
        "name": "Nanit Flex Stand",
        "price": 39,
        "description": "Move your Pro Camera + Flex Stand from room to room or take it on the go (think playdates, travel, and other caregivers homes) to get a 130° view in seconds.",
        "discount": false,
        "discountAmount": 0,
        "type": "Stand",
        "brand": "none",
        "image": img15,
    },

]

export default AccessoriesData;