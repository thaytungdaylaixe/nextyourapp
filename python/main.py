import time
import json
import asyncio
import random
import os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

from selenium.webdriver.chrome.service import Service

# from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

from selenium.common.exceptions import NoSuchElementException
from lib import db

# from lib import db, iptext

# System call
os.system("")


# Class of different styles
class style:
    BLACK = "\033[30m"
    RED = "\033[31m"
    GREEN = "\033[32m"
    YELLOW = "\033[33m"
    BLUE = "\033[34m"
    MAGENTA = "\033[35m"
    CYAN = "\033[36m"
    WHITE = "\033[37m"
    UNDERLINE = "\033[4m"
    RESET = "\033[0m"


# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver = webdriver.Chrome()

# url = "file:///C:/Users/thayt/Desktop/kqht01.html"
url = "https://lms.rdi.edu.vn/"

driver.get(url)

username = "194122671"
#username = "194122679"
password = "@Mydung0209"

driver.find_element(By.XPATH, '//*[@id="username"]').send_keys(username)
driver.find_element(By.XPATH, '//*[@id="password"]').send_keys(password)
driver.find_element(By.XPATH, '//*[@class="signup-form"]/div[3]/button').click()


def Btvn(data_mon):

    try:
        driver.find_element(By.XPATH, '//input[@value="Bắt đầu làm bài"]').click()
    except NoSuchElementException:
        pass

    time.sleep(2)

    try:
        whandle = driver.window_handles[1]
        driver.switch_to.window(whandle)
    except:
        pass

    so_cauhoi = driver.find_elements(By.XPATH, '//*[@class="qtext"]')

    so_cauchuacodapan = 0

    for r in range(1, len(so_cauhoi) + 1):

        cauhoi = driver.find_element(
            By.XPATH, "//form/div/div[" + str(r) + "]/div[2]/div[1]/div[1]"
        ).text

        # input(style.GREEN + cauhoi + style.RESET)

        dapandung_arr = db.getDapanDung(data_mon, cauhoi)

        so_dapan = driver.find_elements(
            By.XPATH, "//form/div/div[" + str(r) + "]/div[2]/div[1]/div[2]/div[2]/div"
        )

        cauhoi_datontai = 0

        if len(so_dapan) == 0:
            pass
        else:
            randomDapan = random.randint(1, len(so_dapan))

            driver.find_element(
                By.XPATH,
                "//form/div/div["
                + str(r)
                + "]/div[2]/div/div[2]/div[2]/div["
                + str(randomDapan)
                + "]/input",
            ).click()

            for e in range(1, len(so_dapan) + 1):

                try:
                    dapan = driver.find_element(
                        By.XPATH,
                        "//form/div/div["
                        + str(r)
                        + "]/div[2]/div[1]/div[2]/div[2]/div["
                        + str(e)
                        + "]/div/div",
                    ).text
                except:
                    dapan = driver.find_element(
                        By.XPATH,
                        "//form/div/div[" + str(r) + "]/div[2]/div[2]/div/div[2]/img",
                    ).get_attribute("alt")
                    # input(style.RED + dapan + style.RESET)

                if dapan in dapandung_arr:
                    cauhoi_datontai += 1
                    driver.find_element(
                        By.XPATH,
                        "//form/div/div["
                        + str(r)
                        + "]/div[2]/div/div[2]/div[2]/div["
                        + str(e)
                        + "]/input",
                    ).click()

            if cauhoi_datontai == 0:
                so_cauchuacodapan += 1
                print(style.RED + str(so_cauchuacodapan) + " - " + cauhoi + style.RESET)

        # Random time

        random_time = random.randint(5, 15)
        time.sleep(random_time)

        # while random_time > 0:
        #     random_time -= 1
        #     print(random_time, end=" ")
        #     time.sleep(1)
        # print()

    time.sleep(2)

    try:
        try:
            driver.find_element(By.XPATH, '//*[@value="Trang tiếp"]').click()
            time.sleep(2)
            Btvn(data_mon)
        except NoSuchElementException:
            time.sleep(2)
            driver.find_element(By.XPATH, '//*[@value="Làm xong ..."]').click()

        # input(style.GREEN + 'Press Enter to continue' + style.RESET)

        time.sleep(2)
        driver.find_element(
            By.XPATH, "//*[contains(text(), 'Nộp bài và kết thúc')]"
        ).click()
        time.sleep(2)
        driver.find_element(By.XPATH, "//*[@value='Nộp bài và kết thúc']").click()

    except NoSuchElementException:
        pass

    print("---------")
    # input(style.RED + 'Co loi xay ra' + style.RESET)


def Save(database, ma_mon, so_cau):

    data_mon = database[ma_mon]
    so_cauhoi = driver.find_elements(By.XPATH, '//*[@class="qtext"]')
    so_cauchuacodapan = 0

    for r in range(1, len(so_cauhoi) + 1):

        cauhoi = driver.find_element(
            By.XPATH, "//form/div/div[" + str(r) + "]/div[2]/div[1]/div[1]"
        ).text

        try:

            try:
                dapandung_el = driver.find_element(
                    By.XPATH, "//form/div/div[" + str(r) + "]/div[2]/div[2]/div"
                ).text

                # input(style.YELLOW + dapandung_el + style.RESET)

                dapandung = dapandung_el.split("The correct answer is: ")[1]
            except:
                dapandung = driver.find_element(
                    By.XPATH, "//form/div/div[" + str(r) + "]/div[2]/div[2]/div/div[2]/img"
                ).get_attribute("alt")
                # input(style.RED + dapandung + style.RESET)

            countCheckCauhoi = db.checkDataMon(data_mon, cauhoi, dapandung)
        

            if countCheckCauhoi == 0:

                so_dapan = driver.find_elements(
                    By.XPATH,
                    "//form/div/div[" + str(r) + "]/div[2]/div[1]/div[2]/div[2]/div",
                )

                if len(so_dapan) == 0:
                    pass
                else:

                    so_cau += 1

                    so_cauchuacodapan += 1
                    print(
                        style.RED
                        + str(so_cauchuacodapan)
                        + " - "
                        + str(so_cau)
                        + " - "
                        + cauhoi
                        + style.RESET
                    )

                    dapan = []

                    for e in range(1, len(so_dapan) + 1):

                        dapan_el = driver.find_element(
                            By.XPATH,
                            "//form/div/div["
                            + str(r)
                            + "]/div[2]/div[1]/div[2]/div[2]/div["
                            + str(e)
                            + "]/div/div",
                        ).text

                        if dapan_el == "":
                            dapan_el = driver.find_element(
                                By.XPATH,
                                "//form/div/div["
                                + str(r)
                                + "]/div[2]/div[1]/div[2]/div[2]/div["
                                + str(e)
                                + "]/div/div/p/img",
                            ).get_attribute("alt")

                        dapan.append(dapan_el)

                    data = {"cauhoi": cauhoi, "dapan": dapan, "dapandung": dapandung}

                    data_mon.append(data)
        except: pass

    db.saveData(database)

    try:
        driver.find_element(
            By.XPATH, "/html/body/div[2]/div[2]/div[2]/div/section[1]/div/div/input"
        ).click()
    except:
        driver.find_element(
            By.XPATH, "//*[contains(text(), 'Hoàn thành việc xem lại')]"
        ).click()

    return so_cau


def Main(ma_mon, so_lan, lan_lam_thu):
    lan_lam_thu += 1
    database = db.getDataMon(ma_mon)
    data_mon = database[ma_mon]

    print(style.GREEN + ma_mon + style.RESET)

    so_cau = len(data_mon)

    time.sleep(2)

    #

    try:
        driver.find_element(
            By.XPATH, "//*[contains(text(), 'Thực hiện lại đề thi')]"
        ).click()
    except NoSuchElementException:
        try:
            driver.find_element(
                By.XPATH, "//*[contains(text(), 'Tiếp tục lần kiểm tra cuối cùng')]"
            ).click()
        except NoSuchElementException:
            driver.find_element(
                By.XPATH, "//*[contains(text(), 'Bắt đầu kiểm tra')]"
            ).click()

    # Bai tap ---------------------------------------------------------------
    time.sleep(3)
    Btvn(data_mon)

    so_cau = Save(database, ma_mon, so_cau)
    # End Luu ----------------------------------------------------------------

    whandle = driver.window_handles[0]
    driver.switch_to.window(whandle)

    print(" ")
    print(
        style.GREEN
        + "So cau : "
        + str(so_cau)
        + " - Da lam "
        + str(lan_lam_thu)
        + "/"
        + str(so_lan)
        + " lan"
        + style.RESET
    )
    print("----------------------------------------------------------------")

    print(" ")

    if int(so_lan) <= int(lan_lam_thu):
        try:
            time.sleep(2)
            driver.find_element(By.XPATH, '//*[@id="next-activity-link"]').click()
            time.sleep(2)
            so_lan = db.solanLambai()
            ma_mon = driver.find_element(
                By.XPATH, "//header/div/div/div/div[2]/div[1]/nav/ol/li[3]/a"
            ).text
            ten_mon = driver.find_element(
                By.XPATH,
                "/html/body/div[2]/div[3]/header/div/div/div/div[1]/div[1]/div/div/h1",
            ).text
            db.getInfoMon(ma_mon, ten_mon)
            time.sleep(2)
            lan_lam_thu = 0

            Main(ma_mon, so_lan, lan_lam_thu)
        except NoSuchElementException:
            input(style.GREEN + "Mời bạn chọn bài tập    " + style.RESET)
            so_lan = db.solanLambai()
            ma_mon = driver.find_element(
                By.XPATH, "//header/div/div/div/div[2]/div[1]/nav/ol/li[3]/a"
            ).text
            ten_mon = driver.find_element(
                By.XPATH,
                "/html/body/div[2]/div[3]/header/div/div/div/div[1]/div[1]/div/div/h1",
            ).text
            db.getInfoMon(ma_mon, ten_mon)
            time.sleep(2)
            lan_lam_thu = 0
            Main(ma_mon, so_lan, lan_lam_thu)

        # input(style.GREEN + 'Moi ban chon mon    ' + style.RESET)
        # so_lan = db.solanLambai()
        # ma_mon = driver.find_element(By.XPATH, '//header/div/div/div/div[2]/div[1]/nav/ol/li[3]/a').text
        # ten_mon = driver.find_element(By.XPATH, '/html/body/div[2]/div[3]/header/div/div/div/div[1]/div[1]/div/div/h1').text
        # time.sleep(2)
        # db.getInfoMon(ma_mon, ten_mon)
        # lan_lam_thu = 0
        # Main(ma_mon, so_lan, lan_lam_thu)

    Main(ma_mon, so_lan, lan_lam_thu)


# input(style.GREEN + 'Moi ban chon mon    ' + style.RESET)
input(style.GREEN + "Mời bạn chọn bài tập    " + style.RESET)
so_lan = db.solanLambai()
ma_mon = driver.find_element(
    By.XPATH, "//header/div/div/div/div[2]/div[1]/nav/ol/li[3]/a"
).text
ten_mon = driver.find_element(
    By.XPATH, "/html/body/div[2]/div[3]/header/div/div/div/div[1]/div[1]/div/div/h1"
).text
db.getInfoMon(ma_mon, ten_mon)
time.sleep(2)
lan_lam_thu = 0
Main(ma_mon, so_lan, lan_lam_thu)
