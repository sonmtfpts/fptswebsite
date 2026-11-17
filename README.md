# FPTS — Website công ty

Website tĩnh HTML/CSS/JavaScript, sử dụng logo Sign.png do công ty cung cấp.
Màu nhận diện: xanh navy #0b2332, đỏ #cf142b, nền trắng.

## Thông tin công ty
- Tên pháp lý: CÔNG TY CỔ PHẦN DỊCH VỤ PHÒNG CHÁY CHỮA CHÁY
- Mã số thuế: 0319481234
- Địa chỉ: 72/11 Nguyễn Văn Lượng, Phường Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam
- Đại diện pháp luật: VŨ ĐÌNH TOÀN
- Hotline / Zalo: 0976 476 785
- Email: info@fpts.info
- Website: https://www.fpts.info
- FIRE PROTECTION TECHNICAL SERVICES là dòng nhận diện trên logo, không khẳng định tên pháp lý tiếng Anh đã đăng ký.

## Đưa lên GitHub để xem online
1. Giải nén FPTS-website-GitHub.zip.
2. Tạo repository GitHub mới (có thể đặt tên fpts-website). Với tài khoản miễn phí, chọn Public để dùng GitHub Pages.
3. Upload TOÀN BỘ NỘI DUNG sau giải nén vào thư mục gốc repo. index.html phải nằm ngay ở gốc, cạnh assets, không nằm trong một thư mục fpts-website lồng thêm.
4. Commit lên nhánh main. Vào Settings → Pages → Build and deployment.
5. Chọn Source: Deploy from a branch; Branch: main; Folder: / (root); nhấn Save.
6. Đợi GitHub triển khai rồi mở URL GitHub Pages hiển thị ở mục Pages (thường là https://TEN-TAI-KHOAN.github.io/fpts-website/).
7. Nếu repo đã dùng nhánh master, chọn master ở bước 5.

Không cần npm install, không cần build, không có node_modules.
Đường dẫn nội bộ là tương đối nên dùng được với repository project Pages.
Tài liệu GitHub: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Tên miền riêng
Chưa tạo CNAME để anh kiểm tra trên github.io trước. Metadata, canonical và sitemap đã đặt theo https://www.fpts.info.
Khi sử dụng tên miền thật, đặt Custom domain trong Settings → Pages và cấu hình DNS tại nhà cung cấp tên miền theo hướng dẫn của GitHub. Việc ghi tên miền trong source không tự kết nối DNS.

## Chức năng kế thừa
- 14 trang: trang chủ, sản phẩm, dịch vụ, dự án, giới thiệu, tin tức, chi tiết tin, liên hệ và 6 trang chính sách.
- Menu máy tính/mobile, danh mục mở rộng, tìm kiếm sản phẩm không dấu, liên kết yêu cầu tư vấn điền sẵn sản phẩm.
- Slideshow, chọn slide, chuyển VI/EN, ghi nhớ ngôn ngữ, phân trang dự án và tin tức.
- Hotline, Zalo, email, bản đồ Google Maps; form liên hệ có kiểm tra dữ liệu, đồng ý xử lý thông tin và chống spam.

## Form liên hệ — cần kích hoạt
Form gửi qua FormSubmit tới info@fpts.info. Chủ hộp thư cần mở email xác nhận của FormSubmit và kích hoạt trước khi nhận yêu cầu thực tế.
Sau khi website online, gửi một yêu cầu thử do anh chủ động thực hiện và xác nhận nhận được email. Chưa gửi thử email thật trong quá trình bàn giao.
Website vẫn hiển thị hotline và email trực tiếp nếu dịch vụ gửi form gặp lỗi. FormSubmit và Google Maps cần Internet.

## Nội dung cần bổ sung theo hồ sơ thật
10 thẻ dự án là NỘI DUNG MINH HỌA để kiểm tra bố cục và phân trang; không phải dự án đã triển khai của FPTS. Tất cả đều được ghi nhãn. Thay bằng công trình của công ty khi có dữ liệu.
Đã loại hồ sơ năng lực PDF và ảnh công trình riêng của doanh nghiệp cũ. Nút hồ sơ được đổi thành thông tin doanh nghiệp; chưa có PDF hồ sơ năng lực FPTS.
Không kế thừa ngày thành lập hoặc thành tích của công ty cũ. Tin tức/kỹ thuật và chính sách giữ khung nội dung từ bộ source để anh rà soát trước khi đưa vào sử dụng chính thức.
Logo hãng mang tính tham khảo, không thể hiện ủy quyền phân phối. Nguồn ảnh nằm tại assets/img/CREDITS.txt.

## Chỉnh sửa
- assets/site.js: SITE chứa thông tin công ty; CATEGORIES, SERVICES, PROJECTS chứa sản phẩm, dịch vụ và dự án.
- assets/news-data.js: nội dung tin tức VI/EN.
- assets/i18n.js: các bản dịch VI/EN. Nội dung mới cần bổ sung cả hai ngôn ngữ.
- assets/style.css: giao diện và responsive.
- assets/img/fpts-logo.png: logo gốc cung cấp, giữ nguyên điểm ảnh.

## Xem trên máy
Mở index.html hoặc chạy python -m http.server 8080 trong thư mục này rồi truy cập http://localhost:8080.
Đây là website tĩnh, chưa có hệ quản trị nội dung, cơ sở dữ liệu hay thanh toán trực tuyến.

## Cập nhật giao diện v2
- Tăng chữ nội dung lên 17px, tiêu đề và chữ chân trang lớn hơn.
- Tên công ty ở chân trang chiếm một hàng riêng trên máy tính; nhãn Website và tên miền cùng một dòng. Màn hình nhỏ tự xuống dòng tên công ty để bảo đảm dễ đọc.
- Bỏ liên kết “Thông tin doanh nghiệp”; bổ sung hai dòng tư vấn thiết kế và bảo trì vận hành ở cột Sản phẩm & Giải pháp.
- Giới thiệu mở rộng, gồm thông tin công ty, tầm nhìn, sứ mệnh và diễn giải năm giá trị cốt lõi; có bản dịch tiếng Anh.
- Sáu dịch vụ sử dụng hình minh họa SVG riêng theo nội dung, co giãn không vỡ nét. Tám bước quy trình vẫn giữ số thứ tự.
- Thanh địa chỉ trên cùng dùng góc vuông ở hai đầu.

## Cập nhật v3
- Header cố định nằm ngoài vùng cuộn nội dung, phủ toàn bộ chiều ngang cửa sổ, gồm khu vực thanh cuộn. Hai góc trên của thanh thông tin bo đối xứng.
- Slide báo cháy tự động được đổi thành Đo độ kín phòng bằng quạt tạo áp, sử dụng nguyên tệp 6100-blower-door.webp do công ty cung cấp. Ảnh hiển thị toàn thiết bị, không cắt mất quạt.
- Tên công ty chuyển về đầu cột thông tin, ngay trên dòng tiếng Anh, giảm cỡ chữ và giữ một dòng.

## Cập nhật v4
- Tách khối Đồng hành / Liên hệ ngay khỏi phần thông tin chân trang bằng đường nhấn và khoảng trắng.
- Tên hiển thị ở chân trang: CÔNG TY CP DỊCH VỤ PHÒNG CHÁY CHỮA CHÁY, cỡ 18px bằng tiêu đề Sản phẩm & Giải pháp. Tên pháp lý đầy đủ ở Giới thiệu và thông tin công ty giữ nguyên.
- Slide Đo độ kín phòng dùng ảnh nền toàn khung được chỉnh từ ảnh tham chiếu bằng công cụ image_gen, với nền phòng kỹ thuật tối. Có ảnh ngang riêng và ảnh dọc riêng; cùng lớp phủ tối với các slide khác. Chữ vẫn là HTML.
- Giá trị cốt lõi bổ sung Hợp tác, đủ 6 ô, có bản tiếng Anh.
- Nếu GitHub giới hạn 100 tệp mỗi lần upload, hãy chia thành các lần upload hoặc dùng Git/GitHub Desktop.

## Cập nhật v5
- Chân trang bản Việt chỉ hiển thị tiêu đề CÔNG TY CP DỊCH VỤ PHÒNG CHÁY CHỮA CHÁY, không còn dòng tên tiếng Anh riêng.
- Chuyển sang EN: tiêu đề công ty thành FIRE PROTECTION TECHNICAL SERVICES, giữ in đậm; tên công ty ở dòng bản quyền và các phần thông tin cũng được dịch.
- Người đại diện VŨ ĐÌNH TOÀN chuyển thành VU DINH TOAN khi chọn EN, khôi phục có dấu khi chọn VI.
- Nội dung slide đo độ kín phòng căn giữa cả ngang và dọc, chữ phủ trên ảnh nền.

## Cập nhật v6
- Nội dung slide đo độ kín phòng căn trái, giữ ảnh nền tối và bố cục theo chiều dọc.

## Cập nhật v7
- Slide đo độ kín phòng dùng nguyên định dạng .slide chung như slide Thi công – bảo trì: cùng cỡ chữ, giới hạn chiều rộng, lề, căn trái, căn dọc và nút bấm trên desktop/mobile. Chỉ ảnh nền và nội dung khác nhau.
