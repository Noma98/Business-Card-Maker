<h1 align="center"><b>Noma - Business Card Maker</b></h1>
<p align="center">
<img src="https://img.shields.io/badge/made by-merry-red">
<img src="https://img.shields.io/badge/React-17.0.2-blue">
<img src="https://img.shields.io/badge/Open%20Source-%F0%9F%A7%A1-brightgreen">
</p>
<img width="100%" alt="thumbnail" src="https://user-images.githubusercontent.com/69305320/118351680-3263f480-b598-11eb-8185-562466727427.png">  
<h2 align="center"><a href="https://609808f28f4b5ac40672e301--merry-business-card-maker.netlify.app"><b>Live Demo</b></a></h2>

# **📝 Description**
Firebase와 Cloudinary를 이용하여 백엔드와 통신하며 동적으로 작동하는 명함 제작 웹 어플리케이션입니다. 로그인 계정에 따라 데이터베이스에 저장된 명함들을 보여주고, 편집 화면에서 정보 수정하면 즉각적으로 데이터를 업데이트 해줍니다. 또한 Cloudinary를 이용해 이미지를 서버에 업로드하여 카드 이미지로 보여줍니다.

이는 Dream Coding Academy에서 진헹된 React 프로젝트로, 기능 및 UI/디자인을 확장/변경하여 Noma만의 스타일을 녹여냈습니다.

## **How to use ❓**
### **1. 소셜 로그인 또는 비회원으로 로그인 하세요.**
📍 로그인 계정을 이용해 저장된 카드 정보를 불러옵니다.

![login](https://user-images.githubusercontent.com/69305320/118350811-a64fce00-b593-11eb-8d37-54dedbd16670.gif)

### **2. 카드를 생성해 명함 정보를 저장하세요.**
📍 `+` 또는 `delete` 버튼을 클릭해 카드를 생성 및 삭제 할 수 있습니다.

![addAndDelete](https://user-images.githubusercontent.com/69305320/118350831-ba93cb00-b593-11eb-8288-ec331cafb19d.gif)

📍 `Maker`에서 데이터를 수정하면 데이터베이스와 `Preview`에 변경된 정보가 바로 반영됩니다. 

![typing](https://user-images.githubusercontent.com/69305320/118350824-b23b9000-b593-11eb-8084-67c6f422a49e.gif)

📍 Cloudinary를 이용하여 이미지 파일을 업로드할 수 있도록 구현했습니다.

![imageUpload](https://user-images.githubusercontent.com/69305320/118350835-c089ac00-b593-11eb-8692-309f63ac10d8.gif)

📍 적절한 이미지가 없다면 제공된 아바타를 선택해보세요.

![selectAvatar](https://user-images.githubusercontent.com/69305320/118350838-c2536f80-b593-11eb-85a1-5b1ac3372b6e.gif)

📍 뒤로가기를 누르면 다시 기본 이미지로 바꿀 수 있습니다.

![back](https://user-images.githubusercontent.com/69305320/118350849-cc756e00-b593-11eb-91dc-2e9f529020a3.gif)

### **3. 검색창에 찾고 싶은 명함속 사람을 입력해보세요.**  
📍 이름을 이용해 검색어를 포함하는 카드를 보여줍니다.

![search](https://user-images.githubusercontent.com/69305320/118350841-c54e6000-b593-11eb-8e95-35c6d280d160.gif)
  
# **🔍 About the project**

### **💻 Development Environment** 
: React.js, React Router, Firebase, Cloudinary, VScode, Github

> ❗ 아래 코드들은 설명을 위해 필요한 부분만 일부 가져온 것으로, 분량상 나머지는 `//...`으로 생략하겠습니다.

자세한 코드는 [이곳](https://github.com/MerryHa/youtube/tree/master/src)에서 확인하세요.

### **✅ Dependency Injection **

📍 데이터 통신을 `App` 컴포넌트로부터 분리시키기 위해 외부에서 `Youtube` 클래스를 생성하여 컴포넌트로 주입하였습니다.








