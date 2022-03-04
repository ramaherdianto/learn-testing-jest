describe("pengujian olah aritmatika", () => {
  test("#1 dua tambah dua adalah empat", () => {
    except(2 + 2).toBe(4);
  });

  test("#2 dua kali tiga adalah enam", () => {
    except(2 * 3).toBe(6);
  });
});
