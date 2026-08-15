# My Timeline Site

Trang cá nhân dạng timeline, build tĩnh bằng [Eleventy](https://www.11ty.dev/),
nội dung quản lý qua [Decap CMS](https://decapcms.org/) tại đường dẫn `/admin`,
host miễn phí trên [Netlify](https://www.netlify.com/).

Xem file `HUONG-DAN-TRIEN-KHAI.md` để biết cách đưa trang này lên mạng — kể cả khi
bạn chưa từng lập trình.

## Cấu trúc thư mục

- `src/index.njk` — trang chủ, tự động liệt kê tất cả chuyến đi
- `src/trips/*.md` — mỗi file là một chuyến đi (được tạo/sửa/xóa qua `/admin`, không cần sửa tay)
- `src/_data/site.json` — tên, tiểu sử, avatar, link mạng xã hội (sửa qua `/admin`)
- `src/admin/` — giao diện quản trị nội dung (Decap CMS)
- `src/css/style.css` — toàn bộ giao diện/màu sắc/layout

## Chạy thử trên máy (không bắt buộc)

Không bắt buộc phải làm bước này — Netlify sẽ tự build giúp bạn. Chỉ cần nếu bạn
muốn xem trước trên máy tính của mình và đã cài Node.js:

```bash
npm install
npm start
```
