# HITOPIA - Problem Solving Test 
## Kevin Alnizar
### Fullstack
### kevinalnizar@gmail.com
---
# Question 

## 1. Weighted Strings (Score: 20)
```
Alfabet dari a sampai z memiliki bobot sebesar angka urutannya, misal: a = 1, b = 2, c = 3, ..., z = 26. Bobot sebuah string merupakan penjumlahan bobot dari kesuluruhan karakter. 
Contoh: gits = 7 + 9 + 20 + 19 = 55

Sampel:
Input:
Diberikan sebuah string abbcccd dengan queries [1, 3, 9, 8]. Queries digunakan untuk menentukan status dari angka di dalam queries dengan aturan:
1. Apabila angka di queries bernilai sama dengan bobot karakter/substring maka return Yes.
2. Apabila angka di queries bernilai beda dengan bobot karakter/substring maka return No.
Pembobotan substring dan karakter:
a = 1
b = 2
bb = 4
c = 3
cc = 6
ccc = 9
d = 4 
Output: [Yes, Yes, Yes, No]
Penjelasan: 
1. 1 => Yes, 3 => Yes, 9 => Yes, dan 8 => No. 
2. Dari pembobotan substring dan karakter yang dimiliki abbcccd maka status dari queries [1, 3, 9, 8] adalah [Yes, Yes, Yes, No].

Aturan:
1. Jika terdapat karakter yang berulang dan berurutan perlu dirincikan ke dalam bentuk substring dari perulangan pertama hingga n. Contoh: bbccc => b, bb, c, cc, ccc. 

Soal: 
Buat fungsi untuk menyelesaikan permasalahan Weighted Strings!
```

## 2. Balanced Bracket (Score: 30)
```
Sampe 1:
Input: { [ ( ) ] }
Output: YES
Penjelasan: Setiap bracket seimbang, antara bracket buka dan bracket tutup.
opening : { }
opening : [ ]
opening : ( }

Sampel 2:
Input: { [ ( ] ) }
Output: NO
Penjelasan: String { [ ( ] ) } tidak seimbang untuk karakter yang diapit oleh { dan } yaitu [ ( ] ).

Sampel 3:
Input: { ( ( [ ] ) [ ] ) [ ] }
Output: YES
Penjelasan: Setiap bracket seimbang, antara bracket buka dan bracket tutup, meskipun struktur bracket tidak beraturan.

Aturan:
1. Tanda bracket / karakter yang diperbolehkan sebagai berikut: ( , ) , { , } , atau [ , ]. 
2. Bracket bisa dipisahkan dengan atau tanpa whitespace. 
3. Periksa tanda kurung yang memiliki kecocokan antara bracket buka dan bracket tutup dengan mengembalikan nilai string YES atau NO.

Soal:
1. Buat fungsi untuk menemukan Balanced Bracket dengan kompleksitas paling rendah!
2. Berapa ukuran kompleksitas kodinganmu? Jelaskan detail kompleksitas jawaban No.2, cantumkan di README Repo! 
```
## 3. Highest Palindrome (Score: 50)
```
Kamu memiliki string yang merepresentasikan angka 3943 lalu diberikan sebuah variabel k untuk melakukan replacement karakter sejumlah k pada string agar mendapatkan bentuk palindrom dengan nilai tertinggi. 

Sampel 1:
Input:
string: 3943 
k: 1 
palindrom:
1. 3943  => 3993
2. 3943 => 3443
Output: 3993
Penjelasan: Dari bentuk palindrom yang diperoleh maka highest palindrome-nya adalah 3993 dikarenakan 3993 > 3443.

Sampel 2:
Input: 
string: 3943 
k: 1 
palindrom: 
1. 932239  => sudah palindrome 
2. Perlu replacement sebanyak k = 2 => 992299
Output: 992299 
Penjelasan: Dari bentuk palindrom yang diperoleh maka highest palindrome-nya adalah 992299 dikarenakan 992299 > 932239.

Aturan:
1. Jika dari sebuah string tidak ditemukan bentuk palindrome-nya meski sudah melakukan replacement dan tidak merepresentasikan sebuah angka maka akan mengeluarkan output -1.
2. Tidak boleh menggunakan fungsi bawaan/tools untuk pencarian/filter/sort.
3. Tidak boleh menggunakan looping.
4. Hanya diperkenankan menggunakan rekursif.

Soal:
Buat fungsi yang digunakan untuk menyelesaikan permasalahan Highest Palindrome!
```
