"use client";

import { useState } from "react";
import {
  Box,
  TextField,
  TextArea,
  Checkbox,
  Button,
  Flex,
} from "@radix-ui/themes";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
    agreed: false,
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    alert(`Спасибо, ${formData.name}! Ваше сообщение отправлено.`);
    setFormData({ name: "", contact: "", message: "", agreed: false });
  };

  return (
    <Box width="100%" maxWidth="400px" p="4" asChild>
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="4">
          <TextField.Root
            size="3"
            placeholder="Как вас зовут? *"
            required
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField.Root
            size="3"
            placeholder="Email или телефон *"
            required
            type="text"
            value={formData.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
          />
          <TextArea
            size="3"
            placeholder="Ваше сообщение... *"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <Flex align="center" gap="2">
            <Checkbox
              id="agreement"
              checked={formData.agreed}
              onCheckedChange={(checked) => handleChange("agreed", checked)}
              required
            />
            <label htmlFor="agreement" style={{ fontSize: "14px" }}>
              Я согласен с условиями обработки персональных данных *
            </label>
          </Flex>
          <Button size="3" type="submit" disabled={!formData.agreed}>
            Отправить сообщение
          </Button>
          <p style={{ fontSize: "12px", color: "var(--gray-10)" }}>
            * — обязательные поля для заполнения
          </p>
        </Flex>
      </form>
    </Box>
  );
}
