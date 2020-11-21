import cv2
import pytesseract
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
import urllib.request
import numpy as np
import time

# 1. Load the image
img = cv2.imread("tea2.jpg")
# 2. Resize the image
img = cv2.resize(img, None, fx=0.5, fy=0.5)
# 3. Convert image to grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# 4. Convert image to black and white (using adaptive threshold)
adaptive_threshold = cv2.adaptiveThreshold(gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 85, 11)
config = "--psm 6"
v = pytesseract.image_to_string(adaptive_threshold, config=config)
print(v)
symb = "/.-"
sym = ""
count = 0
for ch in v:
    if ch in symb and ch == v[count+3]:
        sym = ch
        i = count
    count = count+1
if sym == "":
    print("Take another picture")
else:
    #i = v.index(sym)
    dd = int(v[i-2])*10+int(v[i-1])
    mm = int(v[i+1])*10+int(v[i+2])
    if i+7 <= len(v) and v[i+6].isdigit() and v[i+7].isdigit():
        yy = int(v[i+4])*1000+int(v[i+5])*100+int(v[i+6])*10+int(v[i+7])
    else:
        yy = int(v[i+4])*10+int(v[i+5])+2000
    print(dd, mm, yy, sep="-", end="\n")
    total = input("Is date okay?:")
    if total == "no" or total == "No" or total == "NO" or total == "n":
        d = input("Is day okay?")
        if d == "no" or d == "No" or d == "NO" or d == "n":
            dd = int(input("Introduce day:"))
        m = input("Is month okay?")
        if m == "no" or m == "No" or m == "NO" or m == "n":
            mm = int(input("Introduce month:"))
        y = input("Is year okay?")
        if y == "no" or y == "No" or y == "NO" or y == "n":
            yy = int(input("Introduce year:"))
        print(dd, mm, yy, sep="-", end="\n")
