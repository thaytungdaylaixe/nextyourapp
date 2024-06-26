import json
import os
import random
import datetime

# System call
os.system("")

# Class of different styles
class style():
    BLACK = '\033[30m'
    RED = '\033[31m'
    GREEN = '\033[32m'
    YELLOW = '\033[33m'
    BLUE = '\033[34m'
    MAGENTA = '\033[35m'
    CYAN = '\033[36m'
    WHITE = '\033[37m'
    UNDERLINE = '\033[4m'
    RESET = '\033[0m'


# path_data = '../store/lmsData.json'
path_data = './store/lmsData.json'



x = datetime.datetime.now()
ngay = str(x.day)+'/'+ str(x.month) +'/'+str(x.year)

def checkInfoMon(database, ma_mon, ten_mon): 
    info_mon = database['infoMon']
    count = 0
    for r in range (0,len(info_mon)) :
        if(info_mon[r]["ma_mon"] == ma_mon):
            count += 1

    if(count == 0):
        with open(path_data, 'w',encoding='utf-8') as outfile:
            data = {"ma_mon":ma_mon,"ten_mon":ten_mon,"ngay":ngay}
            info_mon.append(data)

            json.dump(database, outfile, ensure_ascii=False)


def getInfoMon(ma_mon, ten_mon):
    with open(path_data, encoding='utf-8') as outfile:     
        database = json.load(outfile)
        checkInfoMon(database, ma_mon, ten_mon)



def solanLambai():
    print(' ')
    # so_lan = input(style.GREEN + 'Mời bạn chọn bài tập    ' + style.RESET)   
    # so_lan = input(style.GREEN + 'Ban muon lam bao nhieu lan?    ' + style.RESET)   

    so_lan = random.randint(12,20)
    print(' ')

    if(so_lan==''):
        so_lan = 0
        solanLambai()

    return int(so_lan)

def saveData(data):
    with open(path_data, 'w', encoding='utf-8') as outfile:
        json.dump(data, outfile, ensure_ascii=False)

    
def checkDataMon(data_mon, cauhoi, dapandung ):  
    count = 0

    for r in range (0,len(data_mon)) :
        if(data_mon[r]['cauhoi'] == cauhoi and data_mon[r]['dapandung']==dapandung  ):
                count += 1

    return count

def getDapanDung(data_mon, cauhoi ):  
    dapandung = []

    for r in range (0,len(data_mon)) :
        if(data_mon[r]['cauhoi'] == cauhoi):
           dapandung.append(data_mon[r]['dapandung'])      

    return dapandung
       


def checkKey(database, ma_mon):
    if ma_mon in database.keys():       
        return database
    else:
        data = {ma_mon:[]}
        database.update(data)
        saveData(database)

        return database

        # with open(path_data, encoding='utf-8') as outfile:
        #     database = json.load(outfile)
           


def getDataMon(ma_mon):
    with open(path_data, encoding='utf-8') as outfile:
        database = json.load(outfile)
        dataAll = checkKey(database, ma_mon)
        return dataAll





# def create_list_mon():    
#     check_file = os.path.isfile(path_list_mon)
#     if(check_file):
#         pass
#     else:
#         with open(path_list_mon, 'w') as outfile:    
#             json.dump({}, outfile, ensure_ascii=False)   
#             outfile.close() 

# def checkKey_in_list_mon(list_mon, ma_mon,ten_mon):
#     if ma_mon in list_mon.keys():       
#         pass
#     else:
#         data = {ma_mon:{"ten_mon":ten_mon,"ngay":ngay}}
#         list_mon.update(data)

#         with open(path_list_mon, 'w', encoding='utf-8') as outfile:
#             json.dump(list_mon, outfile, ensure_ascii=False)
            


# def get_list_mon(ma_mon, ten_mon):
#     with open(path_list_mon, encoding='utf-8') as outfile:
#         list_mon = json.load(outfile)

#         checkKey_in_list_mon(list_mon, ma_mon, ten_mon)
        

        
# # File mon

# def file_name(ma_mon):   
#     return './data/'+ma_mon+'.json'

# def create_file_mon(ma_mon):        
#     check_file = os.path.isfile(file_name(ma_mon))
#     if(check_file):
#         pass
#     else:
#         with open(file_name(ma_mon), 'w') as outfile:    
#             json.dump([], outfile, ensure_ascii=False)   
#             outfile.close() 


# def getDataMon(ma_mon):
#     with open(file_name(ma_mon), encoding='utf-8') as outfile:
#         data_mon = json.load(outfile)
#         return data_mon
    
# def saveData(ma_mon, data):
#     with open(file_name(ma_mon), 'w', encoding='utf-8') as outfile:
#         json.dump(data, outfile, ensure_ascii=False)
    
# def checkDataMon(data_mon, cauhoi, dapandung ):  
#     count = 0

#     for r in range (0,len(data_mon)) :
#         if(data_mon[r]['cauhoi'] == cauhoi and data_mon[r]['dapandung']==dapandung  ):
#                 count += 1

#     return count

# def getDapanDung(data_mon, cauhoi ):  
#     dapandung = []

#     for r in range (0,len(data_mon)) :
#         if(data_mon[r]['cauhoi'] == cauhoi):
#            dapandung.append(data_mon[r]['dapandung'])      

#     return dapandung