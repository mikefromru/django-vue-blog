from django.contrib import admin
from django.urls import path, include, re_path

from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve

from django.views.generic import TemplateView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from rest_framework_swagger.views import get_swagger_view
swagger = get_swagger_view(title='API')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app.urls')),
    path('swagger/', swagger),

    re_path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
    re_path(r'', TemplateView.as_view(template_name='index.html'), name='home'),
]

urlpatterns += staticfiles_urlpatterns()