from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.
# UserAdmin.fieldsets += ((None, {"fields": ("avatar", "is_instructor")}),)
# admin.site.register(User, UserAdmin)


# class PersonAdmin(admin.ModelAdmin):
#     readonly_fields = ("owner",)
